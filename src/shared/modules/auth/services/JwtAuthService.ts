import { IJwtAuthService } from '../interfaces/IJwtAuthService';
import { Inject, Injectable } from '@nestjs/common';
import { IAppCQRSBus } from '../../app-cqrs/interfaces/IAppCQRSBus';
import { Result } from '../../../core/class/result';
import { JwtAuthenticated } from '../types/jwt-authenticated.type';
import { JwtPayload } from '../types/jwt-payload.type';
import { AuthUser } from '../types/auth-user.type';
import { ForgotPasswordDto } from '../types/forgot-password.dto';
import { ConfirmUserDto } from '../types/confirm-user.dto';
import { SignUpDto } from '../types/sign-up.dto';
import { ValidateUserByJwtDto } from '../types/validate-user-by-jwt.dto';
import { UserService } from '../../user/services/user.service';
import { PROVIDER, SignInDto } from '../types/sign-in.dto';
import { UniqueEntityID } from '../../data-access/mongoose/UniqueEntityID';
import { AuthMapper } from '../mapper/auth.mapper';
import { JwtService } from '@nestjs/jwt';
import { AppError } from '../../../core/errors/AppError';
import { Connection } from 'mongoose';
import { TenantEntity } from '../../tenant/entities/tenant.entity';
import { GetOneTenantQuery } from '../../tenant/cqrs/queries/impl/get-one-tenant.query';
import { GetTenantConnectionQuery } from '../../tenant/cqrs/queries/impl/get-tenant-connection.query';
import { UserEntity } from '../../user/entities/user.entity';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { AuthErrors } from '../errors/auth.errors';
import { TENANT } from '../../tenant/providers/tenant.providers';
import { ITenant } from '../../../core/interfaces/ITenant';
import { OnForgotPasswordEvent } from '../cqrs/events/impl/on-forgot-password.event';
import { FilesEntity, FilesFeature } from '../../files/entities/files.entity';
import { GetOneFilesQuery } from '../../files/cqrs/queries/impl/get-one-files.query';
import { RoleEntity } from '../../user/modules/role/entities/role.entity';

@Injectable()
export class JwtAuthService implements IJwtAuthService {

  constructor(private _userService: UserService,
              @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
              @Inject(TENANT) private readonly _tenant: ITenant,
              private readonly _jwtService: JwtService) {
  }


  async changePassword(userId: string, newPassword: string): Promise<Result<void>> {
    return await this._userService.resetPassword(userId, newPassword);
  }

  async forgotPassword(params: ForgotPasswordDto): Promise<Result<void>> {

    try {
      const userOrErr = await this._userService.findOne({ email: { eq: params.email } });

      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }

      const user = userOrErr.unwrap();
      const jwtOrErr = this.getJwt(user);

      if (jwtOrErr.isFailure) {
        return Result.Fail(jwtOrErr.unwrapError());
      }

      const tenantCode = this._tenant ? this._tenant.code : null;
      let url = `${params.redirectTo}${!params.redirectTo.includes('?') ? '?' : ''}jwt=${jwtOrErr.unwrap()}`;
      url = tenantCode ? url.concat(`&tenant=${tenantCode}`) : url;
      const lang = params.lang ?? 'es';

      await this._cqrsBus.publishEvent(new OnForgotPasswordEvent({
        email: user.email,
        lang,
        displayName: `${user.firstname} ${user?.lastname ?? ''}`,
        url,
      }));

      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));

    }


  }

  async signIn({ password, unique }: SignInDto): Promise<Result<JwtAuthenticated>> {

    try {
      const userOrErr = await this._userService.validateUser(unique, password);
      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }

      const user = userOrErr.unwrap();

      if (!user.isActive) {
        return Result.Fail(new AuthErrors.UserIsNotActive(user.username));
      }

      let roles: Array<RoleEntity> = [];
      if (!user.isAdmin) {
        const rolesOrErr = await this._userService.getUserRolesById(user.id);
        if (rolesOrErr.isFailure) {
          return Result.Fail(rolesOrErr.unwrapError());
        }
        roles = rolesOrErr.unwrap();
      }


      const avatarFileOrErr = user?.avatarFile ? await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: user?.avatarFile },
        },
      })) : null;

      const authUser: AuthUser = AuthMapper.entityToAuthUser(user,
        roles,
        avatarFileOrErr && avatarFileOrErr.isSuccess ? avatarFileOrErr.unwrap() : undefined);

      const tokenOrErr = this.getJwt(user as UserEntity);
      if (tokenOrErr.isFailure) {
        return Result.Fail(tokenOrErr.unwrapError());
      }

      return Result.Ok({
        user: authUser,
        roles: authUser.roles,
        providerData: {
          provider: PROVIDER.LOCAL,
          thirdPartyId: authUser.userId,
        },
        access_token: tokenOrErr.unwrap(),
      });
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  async signUp({ email, firstname, lastname, password, username }: SignUpDto): Promise<Result<void>> {

    try {
      const createResultOrErr = await this._userService.create({
        id: new UniqueEntityID().toString(),
        email,
        username,
        firstname,
        password,
        lastname,
        verified: false,
        isAdmin: false,
        isActive: true,
      });

      if (createResultOrErr.isFailure) {
        return Result.Fail(createResultOrErr.unwrapError());
      }
      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }


  }

  async validateUser(identifier: string): Promise<Result<void>> {
    throw new Error('Implements me!');
  }

  async validateUserByJwtPayload({ tenant, payload }: ValidateUserByJwtDto): Promise<Result<AuthUser>> {
    try {
      let tenantOrErr: Result<TenantEntity> = null;
      let tenantConnection: Result<Connection> = null;
      if (tenant) {
        tenantOrErr = await this._cqrsBus.execQuery(new GetOneTenantQuery({ where: { code: { eq: tenant } } }));
        if (tenantOrErr.isFailure) {
          return Result.Fail(tenantOrErr.unwrapError());
        }
        const tenantEntity = tenantOrErr.unwrap();
        tenantConnection = await this._cqrsBus.execQuery(new GetTenantConnectionQuery(tenantEntity));

      } else {
        tenantConnection = await this._cqrsBus.execQuery(new GetTenantConnectionQuery());
      }

      if (tenantConnection.isFailure) {
        return Result.Fail(tenantConnection.unwrapError());
      }

      const where: FilterableFieldsType<UserEntity> = { id: { eq: payload.data.userId } };
      let userOrErr: Result<UserEntity> = await this._userService.getUserByConnection(where, tenantConnection.unwrap());

      if (userOrErr.isFailure) {
        //Check User in the main Db, in case super admin user
        tenantConnection = await this._cqrsBus.execQuery(new GetTenantConnectionQuery());

        userOrErr = await this._userService.getUserByConnection(where, tenantConnection.unwrap());

        if (userOrErr.isFailure) {
          return Result.Fail(userOrErr.unwrapError());
        }

        const user = userOrErr.unwrap();
        return Result.Ok(AuthMapper.entityToAuthUser(user));
      }
      const user = userOrErr.unwrap();

      if (!user.isActive) {
        return Result.Fail(new AuthErrors.UserIsNotActive(user.username));
      }

      let roles: Array<RoleEntity> = [];
      if (!user.isAdmin) {
        const rolesOrErr = await this._userService.getUserRolesById(user.id);
        if (rolesOrErr.isFailure) {
          return Result.Fail(rolesOrErr.unwrapError());
        }
        roles = rolesOrErr.unwrap();
      }

      const avatarFileOrErr = user?.avatarFile ? await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: user?.avatarFile },
        },
      }, {
        connection: tenantConnection.unwrap(),
        modelName: FilesFeature.name,
        modelSchema: FilesFeature.schema,
      })) : null;

      return Result.Ok(AuthMapper.entityToAuthUser(user, roles,
        avatarFileOrErr && avatarFileOrErr.isSuccess ? avatarFileOrErr.unwrap() : undefined));
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  async confirmUser({ email }: ConfirmUserDto): Promise<Result<void>> {
    try {
      const userOrErr = await this._userService.findOne({ email: { eq: email } });
      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }

      await this._userService.updateById(userOrErr.unwrap().id, { verified: true });
      //@todo launch Confirm Event
      return Result.Ok();

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

  getJwt(user: UserEntity): Result<string> {

    try {

      const authUser = AuthMapper.entityToAuthUser(user);

      const jwtPayload: JwtPayload = {
        sub: authUser.userId,
        roles: authUser.roles,
        data: {
          email: authUser.email,
          userId: authUser.userId,
          username: authUser.username,
        },
      };

      return Result.Ok(this._jwtService.sign(jwtPayload));
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }
}
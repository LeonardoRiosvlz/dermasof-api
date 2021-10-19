import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from '../../../core/class/base.service';
import { UserEntity, UserFeature } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Result } from '../../../core/class/result';
import { UserErrors } from '../errors/user.errors';
import { Identifier } from '../../../core/interfaces/IEntity';
import { UserUpdateType } from '../types/update-user.type';
import PasswordUtils from '../../../utils/password.utils';
import { AppError } from '../../../core/errors/AppError';
import { IUserService } from '../interfaces/IUserService';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { Connection } from 'mongoose';
import { RoleEntity, RoleFeature } from '../modules/role/entities/role.entity';
import { merge } from 'lodash';
import { RoleEntityService } from '../modules/role/services/role-entity.service';
import { IAppCQRSBus } from '../../app-cqrs/interfaces/IAppCQRSBus';
import { OnCreatedUserEvent } from '../cqrs/events/impl/on-created-user-event';

@Injectable()
export class UserService extends BaseEntityService<UserEntity> implements IUserService {
  constructor(private readonly _userRepo: UserRepository,
              private readonly _roleService: RoleEntityService,
              @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super(_userRepo, UserEntity.name);
  }


  async create(entity: UserEntity): Promise<Result<void>> {
    // @ts-ignore
    const exists = await this._userRepo.exist({
      or: [
        { username: { eq: entity.username } },
        { email: { eq: entity.email } },
      ],
    });
    if (exists) {
      return Result.Fail(new UserErrors.UserCannotBeRegistered());
    }

    if (!PasswordUtils.isComplex(entity.password)) {
      return Result.Fail(new AppError.ValidationError(`password: isn't complex`));
    }
    entity.password = PasswordUtils.hashPassword(entity.password);
    entity.verified = entity.isAdmin ? true : false;

    const createOrErr = await super.create(entity);

    if (createOrErr.isSuccess) {
      this._cqrsBus.publishEvent(new OnCreatedUserEvent(entity));
    }

    return createOrErr;
  }


  async updateById(id: Identifier, update: UserUpdateType): Promise<Result<void>> {
    // @ts-ignore
    const user = await this._userRepo.findOne({ id: { eq: id } });
    if (!user) {
      return Result.Fail(new UserErrors.UserWithIdDoesntExist(String(id)));
    }

    if (update?.username && update.username === user.username) {
      return Result.Fail(new UserErrors.EmailOrUserNameUsed());
    }

    if (update?.profile) {
      update.profile = merge(user.profile, update.profile);
    }

    return super.updateById(id, update);
  }


  async validateUser(userId: string, password: string): Promise<Result<Omit<UserEntity, 'password'>>> {

    try {
      const userOrErr: Result<UserEntity> = await this.getUserByUserNmeOrEmail(userId);

      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }

      const user = userOrErr.unwrap();

      if (!PasswordUtils.compare(password, user.password)) {
        return Result.Fail(new AppError.ValidationError(`Passwords do not match`));
      }

      delete user.password;
      return Result.Ok(user);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  async getUserByUserNmeOrEmail(unique: string): Promise<Result<UserEntity>> {

    try {
      // @ts-ignore
      const user = await this._userRepo.findOne({
        or: [
          { username: { eq: unique } },
          { email: { eq: unique } },
        ],
      });

      if (!user) {
        return Result.Fail(new UserErrors.UserDoesntExist());
      }

      return Result.Ok(user);

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  async resetPassword(userId: string, newPassword: string): Promise<Result<void>> {
    try {
      if (!PasswordUtils.isComplex(newPassword)) {
        return Result.Fail(new AppError.ValidationError(`password: isn't complex`));
      }

      const exists: boolean = await this._userRepo.exist({ id: { eq: userId } });
      if (!exists) {
        return Result.Fail(new UserErrors.UserWithIdDoesntExist(String(userId)));
      }

      await this._userRepo.updateById(userId, {
        password: PasswordUtils.hashPassword(newPassword),
      });

      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


  async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<Result<void>> {

    try {
      const user = await this._userRepo.findById(userId);
      if (!user) {
        return Result.Fail(new UserErrors.UserWithIdDoesntExist(userId));
      }

      const matchPassword = PasswordUtils.compare(oldPassword, user.password);
      if (!matchPassword) {
        return Result.Fail(new UserErrors.WrongPassword());
      }

      if (!PasswordUtils.isComplex(newPassword)) {
        return Result.Fail(new AppError.ValidationError(`password: isn't complex`));
      }

      await this._userRepo.updateById(userId, {
        password: PasswordUtils.hashPassword(newPassword),
      });

      return Result.Ok();
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


  async getUserByConnection(where: FilterableFieldsType<UserEntity>, connection: Connection): Promise<Result<UserEntity>> {

    try {
      this.passConnection2Repo({ connection, modelName: UserFeature.name, modelSchema: UserFeature.schema });
      const userOrErr = await this.findOne(where);

      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }
      return Result.Ok(userOrErr.unwrap());
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


  async getUserRolesById(id: Identifier): Promise<Result<Array<RoleEntity>>> {

    try {
      const user = await this._userRepo.findOne({ id: { eq: id } });
      if (!user) {
        return Result.Fail(new UserErrors.UserWithIdDoesntExist(String(id)));
      }
      const rolesOrEr = await this._roleService.getAll({ id: { in: user.roles } });

      if (rolesOrEr.isFailure) {
        return Result.Fail(rolesOrEr.unwrapError());
      }
      const roles = rolesOrEr.unwrap();
      if (roles.length === 0) {
        return Result.Fail(new UserErrors.UserWithoutRoles(user.email));
      }
      return Result.Ok(roles);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }


  }

  async getUserRolesByConnection(id: Identifier, connection: Connection): Promise<Result<Array<RoleEntity>>> {

    try {
      const userOrErr = await this.getUserByConnection({ id: { eq: String(id) } }, connection);
      if (userOrErr.isFailure) {
        return Result.Fail(new UserErrors.UserWithIdDoesntExist(String(id)));
      }
      const user = userOrErr.unwrap();
      this._roleService.passConnection2Repo({
        connection,
        modelName: RoleFeature.name,
        modelSchema: RoleFeature.schema,
      });

      const rolesOrErr = await this._roleService.getAll({ id: { in: user.roles } });

      if (rolesOrErr.isFailure) {
        return Result.Fail(rolesOrErr.unwrapError());
      }

      const roles = rolesOrErr.unwrap();

      if (roles.length === 0) {
        return Result.Fail(new UserErrors.UserWithoutRoles(user.email));
      }

      return Result.Ok(roles);
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}




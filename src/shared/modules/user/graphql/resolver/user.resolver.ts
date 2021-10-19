import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { UserResponse } from '../dto/responses/user.response';
import { SolvedEntityResponse } from '../../../graphql/dto/responses/solved-entity.response';
import { UserMapper } from '../../mappers/user.mapper';
import { GraphQLVoid } from 'graphql-scalars';
import { CreateUserInput } from '../dto/input/create-user.input';
import { CurrentLanguage } from '../../../../decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { CreateUserCommand } from '../../cqrs/commands/impl/create-user.command';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';
import { UpdateUserCommand } from '../../cqrs/commands/impl/update-user.command';
import { DeleteUserInput } from '../dto/input/delete-user.input';
import { DeleteUserCommand } from '../../cqrs/commands/impl/delete-user.command';
import { GetAllUsersInput } from '../dto/input/get-all-users.input';
import { UserEntity } from '../../entities/user.entity';
import { GetAllUsersQuery } from '../../cqrs/queries/impl/get-all-users.query';
import { GetOneUserInput } from '../dto/input/get-one-user.input';
import { GetOneUserQuery } from '../../cqrs/queries/impl/get-one-user.query';
import { GetPaginatedUsersInput } from '../dto/input/get-paginated-users.input';
import { PaginatedUsers } from '../dto/responses/paginated.users.dto';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { GetPaginatedUsersQuery } from '../../cqrs/queries/impl/get-paginated-users.query';
import { RoleEntity } from '../../modules/role/entities/role.entity';
import { GetAllRoleQuery } from '../../modules/role/cqrs/queries/impl/get-all-role.query';
import { GqlAuthGuard } from '../../../auth/guard/graphql.guard';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { AuthUser } from '../../../auth/types/auth-user.type';
import { ChangePasswordCommand } from '../../cqrs/commands/impl/change-password.command';
import { ResetPasswordCommand } from '../../cqrs/commands/impl/reset-password.command';
import { ResetPasswordInput } from '../dto/input/reset-password.input';
import { ChangePasswordInput } from '../dto/input/change-password.input';
import { CloudFileResponse } from '../../../graphql/dto/responses/cloud-file.response';
import { FilesEntity } from '../../../files/entities/files.entity';
import { GetOneFilesQuery } from '../../../files/cqrs/queries/impl/get-one-files.query';
import { PermitsGuard } from '../../../auth/guard/permits.guard';
import { Permit } from '../../../auth/decorators/permit.decorators';
import { APP_MODULES } from '../../../../resources/modules.enum';
import { ACTION_LIST } from '../../../../resources/permits.type';
import { ProfileResponse } from '../dto/responses/profile.response';
import { UpdateMeInput, UpdateUserInput } from '../dto/input/update-user.input';
import { DeleteManyUserInput } from '../dto/input/delete-many-user.input';
import { DeleteManyUserCommand } from '../../cqrs/commands/impl/delete-many-user.command';


@Resolver(() => UserResponse)
export class UserResolver extends BaseResolver {
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
    private readonly _userMapper: UserMapper,
  ) {
    super();
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createUser(
    @Args('input') input: CreateUserInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateUserCommand(
      this._userMapper.dtoInput2Persistent<CreateUserInput>(input),
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateUser(
    @Args('input') { entityId, update }: UpdateUserInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateUserCommand({
      entityId,
      update: update as any,
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.DELETE_ONE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteUser(
    @Args('input') { entityId }: DeleteUserInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteUserCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.DELETE_MANY })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyUser(
    @Args('input') { where }: DeleteManyUserInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyUserCommand({ where }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.GET_ALL })
  @Query(() => [UserResponse])
  async getAllUsers(
    @Args('input', { nullable: true }) input: GetAllUsersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<UserResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<UserEntity>>>(new GetAllUsersQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._userMapper.persistent2Dto);
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.GET_ONE })
  @Query(() => UserResponse)
  async getOneUser(
    @Args('input', { nullable: true }) input: GetOneUserInput,
    @CurrentLanguage() lang?: string,
  ): Promise<UserResponse> {
    const resp = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._userMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedUsers)
  async getPaginatedUser(
    @Args('input', { nullable: true }) input: GetPaginatedUsersInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedUsers> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<UserEntity>>>(new GetPaginatedUsersQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._userMapper.persistent2Dto),
    };
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async changePassword(
    @CurrentUser() { userId }: AuthUser,
    @Args('input')  input: ChangePasswordInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp: Result<void> = await this._cqrsBus.execCommand(new ChangePasswordCommand({ ...input, userId }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async resetPassword(
    @CurrentUser() { userId }: AuthUser,
    @Args('input')  input: ResetPasswordInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp: Result<void> = await this._cqrsBus.execCommand(new ResetPasswordCommand({ ...input, userId }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }


  @Query(() => ProfileResponse, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async getMyProfile(
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<ProfileResponse> {
    const resp = await this._cqrsBus.execQuery<Result<UserEntity>>(
      new GetOneUserQuery({ where: { id: { eq: user.userId } } }),
    );
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const userResp = this._userMapper.persistent2Dto(resp.unwrap());
    return userResp.profile ? userResp.profile : null;
  }


  @Mutation(() => GraphQLVoid, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async updateMe(
    @CurrentUser() user: AuthUser,
    @Args('input') input: UpdateMeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp: Result<void> = await this._cqrsBus.execCommand(new UpdateUserCommand({
      entityId: user.userId,
      update: input,
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }



  @Query(() => ProfileResponse, { nullable: true })
  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.USERS, action: ACTION_LIST.USERS_GET_USER_PROFILE })
    async getUserProfile(
    @Args('userId', {type: ()=> ID}) userId: string,

    @CurrentLanguage() lang?: string,
  ): Promise<ProfileResponse> {
    const resp = await this._cqrsBus.execQuery<Result<UserEntity>>(
      new GetOneUserQuery({ where: { id: { eq: userId } } }),
    );
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const userResp = this._userMapper.persistent2Dto(resp.unwrap());
    return userResp.profile ? userResp.profile : null;
  }



  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async roles(@Parent() parent?: UserResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.roles) {
      const rolesOrErr = await this._cqrsBus.execQuery<Result<Array<RoleEntity>>>(new GetAllRoleQuery({
        where: {
          id: { in: parent.roles.map(x => x.id) },
        },
      }));
      if (rolesOrErr.isFailure) {
        return [];
      }
      const roles: Array<RoleEntity> = rolesOrErr.unwrap();
      return roles.map((x) => {
        return {
          id: x.id,
          entityName: RoleEntity.name,
          identifier: x.name,
        };
      });
    }
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async avatarFile(@Parent() parent?: UserResponse): Promise<CloudFileResponse> {
    if (parent?.avatarFile) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.avatarFile.id },
        },
      }));
      if (fileOrErr.isFailure) {
        return null;
      }
      const file = fileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }

}




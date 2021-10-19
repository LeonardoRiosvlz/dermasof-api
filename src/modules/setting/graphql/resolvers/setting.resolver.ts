import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateSettingInput } from '../dto/inputs/create-setting.input';
import { SettingResponse } from '../dto/responses/setting.response';
import { GetAllSettingInput } from '../dto/inputs/get-all-setting.input';
import { DeleteSettingInput } from '../dto/inputs/delete-setting.input';
import { CreateSettingCommand } from '../../cqrs/commands/impl/create-setting.command';
import { DeleteSettingCommand } from '../../cqrs/commands/impl/delete-setting.command';
import { GetAllSettingQuery } from '../../cqrs/queries/impl/get-all-setting.query';
import { SettingMapper } from '../../mapper/setting.mapper';
import { UpdateSettingInput } from '../dto/inputs/update-setting.input';
import { UpdateSettingCommand } from '../../cqrs/commands/impl/update-setting.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedSettingInput } from '../dto/inputs/get-paginated-setting.input';
import { PaginatedSettingResponse } from '../dto/responses/paginated-setting.response';
import { GetPaginatedSettingQuery } from '../../cqrs/queries/impl/get-paginated-setting.query';
import { GetOneSettingInput } from '../dto/inputs/get-one-setting.input';
import { GetOneSettingQuery } from '../../cqrs/queries/impl/get-one-setting.query';
import { DeleteManySettingInput } from '../dto/inputs/delete-many-setting.input';
import { DeleteManySettingCommand } from '../../cqrs/commands/impl/delete-many-setting.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { SettingEntity } from '../../entities/setting.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';

@Resolver(() => SettingResponse)
export class SettingResolver extends BaseResolver {
  constructor(
    private readonly _settingMapper: SettingMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createSetting(
    @Args('input') input: CreateSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateSettingCommand(
      this._settingMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateSetting(
    @Args('input') { update, entityId }: UpdateSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateSettingCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteSetting(
    @Args('input') { entityId }: DeleteSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteSettingCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManySetting(
    @Args('input') input: DeleteManySettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManySettingCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[SettingResponse])
  async getAllSetting(
    @Args('input', { nullable: true }) input: GetAllSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SettingResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<SettingEntity>>>(new GetAllSettingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._settingMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.GET_ONE})
  @Query(() => SettingResponse, { nullable: true })
  async getOneSetting(
    @Args('input', { nullable: true }) input: GetOneSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<SettingResponse> {
    const resp = await this._cqrsBus.execQuery<Result<SettingEntity>>(new GetOneSettingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._settingMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SETTING'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedSettingResponse, { nullable: true })
  async getPaginatedSetting(
    @Args('input', { nullable: true }) input: GetPaginatedSettingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedSettingResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<SettingEntity>>>(new GetPaginatedSettingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._settingMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async logo(@Parent() parent?: SettingResponse): Promise<CloudFileResponse> {
    if (parent?.logo) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.logo.id },
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

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateServiceCategoryInput } from '../dto/inputs/create-service-category.input';
import { ServiceCategoryResponse } from '../dto/responses/service-category.response';
import { GetAllServiceCategoryInput } from '../dto/inputs/get-all-service-category.input';
import { DeleteServiceCategoryInput } from '../dto/inputs/delete-service-category.input';
import { CreateServiceCategoryCommand } from '../../cqrs/commands/impl/create-service-category.command';
import { DeleteServiceCategoryCommand } from '../../cqrs/commands/impl/delete-service-category.command';
import { GetAllServiceCategoryQuery } from '../../cqrs/queries/impl/get-all-service-category.query';
import { ServiceCategoryMapper } from '../../mapper/service-category.mapper';
import { UpdateServiceCategoryInput } from '../dto/inputs/update-service-category.input';
import { UpdateServiceCategoryCommand } from '../../cqrs/commands/impl/update-service-category.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedServiceCategoryInput } from '../dto/inputs/get-paginated-service-category.input';
import { PaginatedServiceCategoryResponse } from '../dto/responses/paginated-service-category.response';
import { GetPaginatedServiceCategoryQuery } from '../../cqrs/queries/impl/get-paginated-service-category.query';
import { GetOneServiceCategoryInput } from '../dto/inputs/get-one-service-category.input';
import { GetOneServiceCategoryQuery } from '../../cqrs/queries/impl/get-one-service-category.query';
import { DeleteManyServiceCategoryInput } from '../dto/inputs/delete-many-service-category.input';
import { DeleteManyServiceCategoryCommand } from '../../cqrs/commands/impl/delete-many-service-category.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ServiceCategoryEntity } from '../../entities/service-category.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => ServiceCategoryResponse)
export class ServiceCategoryResolver extends BaseResolver {
  constructor(
    private readonly _serviceCategoryMapper: ServiceCategoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createServiceCategory(
    @Args('input') input: CreateServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateServiceCategoryCommand(
      this._serviceCategoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateServiceCategory(
    @Args('input') { update, entityId }: UpdateServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateServiceCategoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteServiceCategory(
    @Args('input') { entityId }: DeleteServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteServiceCategoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyServiceCategory(
    @Args('input') input: DeleteManyServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyServiceCategoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ServiceCategoryResponse])
  async getAllServiceCategory(
    @Args('input', { nullable: true }) input: GetAllServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ServiceCategoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ServiceCategoryEntity>>>(new GetAllServiceCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._serviceCategoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.GET_ONE})
  @Query(() => ServiceCategoryResponse, { nullable: true })
  async getOneServiceCategory(
    @Args('input', { nullable: true }) input: GetOneServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ServiceCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ServiceCategoryEntity>>(new GetOneServiceCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._serviceCategoryMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SERVICE_CATEGORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedServiceCategoryResponse, { nullable: true })
  async getPaginatedServiceCategory(
    @Args('input', { nullable: true }) input: GetPaginatedServiceCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedServiceCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ServiceCategoryEntity>>>(new GetPaginatedServiceCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._serviceCategoryMapper.persistent2Dto),
    };
  }


}

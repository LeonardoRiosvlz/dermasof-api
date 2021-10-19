import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { GraphQLVoid } from 'graphql-scalars';
import { CreateTenantCommand } from '../../cqrs/commands/impl/create-tenant.command';
import { Result } from '../../../../core/class/result';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';
import { CurrentLanguage } from '../../../../decorators/current-language.decorator';
import { TenantMapper } from '../../mappers/tenant.mapper';
import { TenantResponse } from '../dto/responses/tenant.response';
import { GetAllTenantsInput } from '../dto/input/get-all-tenants.input';
import { CreateTenantInput } from '../dto/input/create-tenant.input';
import { TenantEntity } from '../../entities/tenant.entity';
import { GetAllTenantsQuery } from '../../cqrs/queries/impl/get-all-tenants.query';
import { Permit } from '../../../auth/decorators/permit.decorators';
import { APP_MODULES } from '../../../../resources/modules.enum';
import { ACTION_LIST } from '../../../../resources/permits.type';
import { PermitsGuard } from '../../../auth/guard/permits.guard';
import { GqlAuthGuard } from '../../../auth/guard/graphql.guard';
import { IPaginatedData } from '../../../../core/interfaces/IPaginatedData';
import { GetPaginatedTenantInput } from '../dto/input/get-paginated-tenant.input';
import { PaginatedTenantResponse } from '../dto/responses/paginated.tenant.response';
import { GetPaginatedTenantsQuery } from '../../cqrs/queries/impl/get-paginated-tenants.query';

import { UpdateTenantInput } from '../dto/input/update-tenant.input';
import { UpdateTenantCommand } from '../../cqrs/commands/impl/update-tenant.command';
import { DeleteTenantCommand } from '../../cqrs/commands/impl/delete-tenant.command';
import { DeleteTenantInput } from '../dto/input/delete-tenant.input';
import { SimplifiedTenantResponse } from '../dto/responses/simplified-tenant.response';
import { GetOneTenantQuery } from '../../cqrs/queries/impl/get-one-tenant.query';
import { GetOneTenantInput } from '../dto/input/get-one-tenant.input';
import { TENANT } from '../../providers/tenant.providers';
import { ITenant } from 'src/shared/core/interfaces/ITenant';
import {Request} from 'express'

@Resolver(() => TenantResponse)
export class TenantResolver extends BaseResolver {
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
    @Inject(TENANT) private readonly _tenant: ITenant,
    @Inject('REQUEST') private readonly _request: Request,
    private readonly _tenantMapper: TenantMapper,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createTenant(
    @Args('input') input: CreateTenantInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const persistent = this._tenantMapper.dtoInput2Persistent<CreateTenantInput>(input);
    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateTenantCommand(persistent,
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap();
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateTenant(
    @Args('input') { update, entityId }: UpdateTenantInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateTenantCommand({ entityId, update }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.DELETE_ONE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteTenant(
    @Args('input') { entityId }: DeleteTenantInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteTenantCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.GET_ALL })
  @Query(() => [TenantResponse], { nullable: true })
  async getAllTenant(
    @Args('input') { where, orderBy }: GetAllTenantsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<TenantResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<TenantEntity>>>(new GetAllTenantsQuery({ where, orderBy }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._tenantMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Query(() => TenantResponse, { nullable: true })
  async getRequestTenant(
    @CurrentLanguage() lang?: string,
  ): Promise<TenantResponse> {
    const resp = await this._cqrsBus.execQuery<Result<TenantEntity>>(new GetOneTenantQuery({
      where: {
        code: { eq: this._tenant.code },
      },
    }));
    if (resp.isFailure) return null;
    return this._tenantMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.GET_ONE })
  @Query(() => TenantResponse, { nullable: true })
  async getOneTenant(
    @Args('input') { where }: GetOneTenantInput,
    @CurrentLanguage() lang?: string,
  ): Promise<TenantResponse> {
    const resp = await this._cqrsBus.execQuery<Result<TenantEntity>>(new GetOneTenantQuery({ where }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._tenantMapper.persistent2Dto(resp.unwrap());
  }

  @Query(() => [SimplifiedTenantResponse], { nullable: true })
  async getAllSimplifiedTenantsInfo(
    @Args('input') { where, orderBy }: GetAllTenantsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SimplifiedTenantResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<TenantEntity>>>(new GetAllTenantsQuery({ where, orderBy }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const tenantsResponses = resp.unwrap().map(this._tenantMapper.persistent2Dto);

    return tenantsResponses.map(({ id, name, code }) => {
      return {
        id,
        name,
        code,
      };
    });
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES.TENANT, action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedTenantResponse)
  async getPaginatedTenant(
    @Args('input', { nullable: true }) input: GetPaginatedTenantInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedTenantResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<TenantEntity>>>(new GetPaginatedTenantsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._tenantMapper.persistent2Dto),
    };
  }


}

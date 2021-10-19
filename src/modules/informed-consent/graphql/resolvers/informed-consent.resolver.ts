import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateInformedConsentInput } from '../dto/inputs/create-informed-consent.input';
import { InformedConsentResponse } from '../dto/responses/informed-consent.response';
import { GetAllInformedConsentInput } from '../dto/inputs/get-all-informed-consent.input';
import { DeleteInformedConsentInput } from '../dto/inputs/delete-informed-consent.input';
import { CreateInformedConsentCommand } from '../../cqrs/commands/impl/create-informed-consent.command';
import { DeleteInformedConsentCommand } from '../../cqrs/commands/impl/delete-informed-consent.command';
import { GetAllInformedConsentQuery } from '../../cqrs/queries/impl/get-all-informed-consent.query';
import { InformedConsentMapper } from '../../mapper/informed-consent.mapper';
import { UpdateInformedConsentInput } from '../dto/inputs/update-informed-consent.input';
import { UpdateInformedConsentCommand } from '../../cqrs/commands/impl/update-informed-consent.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedInformedConsentInput } from '../dto/inputs/get-paginated-informed-consent.input';
import { PaginatedInformedConsentResponse } from '../dto/responses/paginated-informed-consent.response';
import { GetPaginatedInformedConsentQuery } from '../../cqrs/queries/impl/get-paginated-informed-consent.query';
import { GetOneInformedConsentInput } from '../dto/inputs/get-one-informed-consent.input';
import { GetOneInformedConsentQuery } from '../../cqrs/queries/impl/get-one-informed-consent.query';
import { DeleteManyInformedConsentInput } from '../dto/inputs/delete-many-informed-consent.input';
import { DeleteManyInformedConsentCommand } from '../../cqrs/commands/impl/delete-many-informed-consent.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { InformedConsentEntity } from '../../entities/informed-consent.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => InformedConsentResponse)
export class InformedConsentResolver extends BaseResolver {
  constructor(
    private readonly _informedConsentMapper: InformedConsentMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createInformedConsent(
    @Args('input') input: CreateInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateInformedConsentCommand(
      this._informedConsentMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateInformedConsent(
    @Args('input') { update, entityId }: UpdateInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateInformedConsentCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteInformedConsent(
    @Args('input') { entityId }: DeleteInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteInformedConsentCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyInformedConsent(
    @Args('input') input: DeleteManyInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyInformedConsentCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[InformedConsentResponse])
  async getAllInformedConsent(
    @Args('input', { nullable: true }) input: GetAllInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<InformedConsentResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<InformedConsentEntity>>>(new GetAllInformedConsentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._informedConsentMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => InformedConsentResponse, { nullable: true })
  async getOneInformedConsent(
    @Args('input', { nullable: true }) input: GetOneInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<InformedConsentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<InformedConsentEntity>>(new GetOneInformedConsentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._informedConsentMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INFORMED_CONSENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedInformedConsentResponse, { nullable: true })
  async getPaginatedInformedConsent(
    @Args('input', { nullable: true }) input: GetPaginatedInformedConsentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedInformedConsentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<InformedConsentEntity>>>(new GetPaginatedInformedConsentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._informedConsentMapper.persistent2Dto),
    };
  }


}

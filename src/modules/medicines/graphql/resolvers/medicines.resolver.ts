import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateMedicinesInput } from '../dto/inputs/create-medicines.input';
import { MedicinesResponse } from '../dto/responses/medicines.response';
import { GetAllMedicinesInput } from '../dto/inputs/get-all-medicines.input';
import { DeleteMedicinesInput } from '../dto/inputs/delete-medicines.input';
import { CreateMedicinesCommand } from '../../cqrs/commands/impl/create-medicines.command';
import { DeleteMedicinesCommand } from '../../cqrs/commands/impl/delete-medicines.command';
import { GetAllMedicinesQuery } from '../../cqrs/queries/impl/get-all-medicines.query';
import { MedicinesMapper } from '../../mapper/medicines.mapper';
import { UpdateMedicinesInput } from '../dto/inputs/update-medicines.input';
import { UpdateMedicinesCommand } from '../../cqrs/commands/impl/update-medicines.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedMedicinesInput } from '../dto/inputs/get-paginated-medicines.input';
import { PaginatedMedicinesResponse } from '../dto/responses/paginated-medicines.response';
import { GetPaginatedMedicinesQuery } from '../../cqrs/queries/impl/get-paginated-medicines.query';
import { GetOneMedicinesInput } from '../dto/inputs/get-one-medicines.input';
import { GetOneMedicinesQuery } from '../../cqrs/queries/impl/get-one-medicines.query';
import { DeleteManyMedicinesInput } from '../dto/inputs/delete-many-medicines.input';
import { DeleteManyMedicinesCommand } from '../../cqrs/commands/impl/delete-many-medicines.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { MedicinesEntity } from '../../entities/medicines.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => MedicinesResponse)
export class MedicinesResolver extends BaseResolver {
  constructor(
    private readonly _medicinesMapper: MedicinesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createMedicines(
    @Args('input') input: CreateMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateMedicinesCommand(
      this._medicinesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateMedicines(
    @Args('input') { update, entityId }: UpdateMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateMedicinesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteMedicines(
    @Args('input') { entityId }: DeleteMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteMedicinesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyMedicines(
    @Args('input') input: DeleteManyMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyMedicinesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[MedicinesResponse])
  async getAllMedicines(
    @Args('input', { nullable: true }) input: GetAllMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MedicinesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<MedicinesEntity>>>(new GetAllMedicinesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._medicinesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.GET_ONE})
  @Query(() => MedicinesResponse, { nullable: true })
  async getOneMedicines(
    @Args('input', { nullable: true }) input: GetOneMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<MedicinesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<MedicinesEntity>>(new GetOneMedicinesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._medicinesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEDICINES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedMedicinesResponse, { nullable: true })
  async getPaginatedMedicines(
    @Args('input', { nullable: true }) input: GetPaginatedMedicinesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedMedicinesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<MedicinesEntity>>>(new GetPaginatedMedicinesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._medicinesMapper.persistent2Dto),
    };
  }


}

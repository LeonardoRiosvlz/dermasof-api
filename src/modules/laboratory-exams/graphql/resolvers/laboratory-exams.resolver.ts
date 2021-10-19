import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateLaboratoryExamsInput } from '../dto/inputs/create-laboratory-exams.input';
import { LaboratoryExamsResponse } from '../dto/responses/laboratory-exams.response';
import { GetAllLaboratoryExamsInput } from '../dto/inputs/get-all-laboratory-exams.input';
import { DeleteLaboratoryExamsInput } from '../dto/inputs/delete-laboratory-exams.input';
import { CreateLaboratoryExamsCommand } from '../../cqrs/commands/impl/create-laboratory-exams.command';
import { DeleteLaboratoryExamsCommand } from '../../cqrs/commands/impl/delete-laboratory-exams.command';
import { GetAllLaboratoryExamsQuery } from '../../cqrs/queries/impl/get-all-laboratory-exams.query';
import { LaboratoryExamsMapper } from '../../mapper/laboratory-exams.mapper';
import { UpdateLaboratoryExamsInput } from '../dto/inputs/update-laboratory-exams.input';
import { UpdateLaboratoryExamsCommand } from '../../cqrs/commands/impl/update-laboratory-exams.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedLaboratoryExamsInput } from '../dto/inputs/get-paginated-laboratory-exams.input';
import { PaginatedLaboratoryExamsResponse } from '../dto/responses/paginated-laboratory-exams.response';
import { GetPaginatedLaboratoryExamsQuery } from '../../cqrs/queries/impl/get-paginated-laboratory-exams.query';
import { GetOneLaboratoryExamsInput } from '../dto/inputs/get-one-laboratory-exams.input';
import { GetOneLaboratoryExamsQuery } from '../../cqrs/queries/impl/get-one-laboratory-exams.query';
import { DeleteManyLaboratoryExamsInput } from '../dto/inputs/delete-many-laboratory-exams.input';
import { DeleteManyLaboratoryExamsCommand } from '../../cqrs/commands/impl/delete-many-laboratory-exams.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { LaboratoryExamsEntity } from '../../entities/laboratory-exams.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => LaboratoryExamsResponse)
export class LaboratoryExamsResolver extends BaseResolver {
  constructor(
    private readonly _laboratoryExamsMapper: LaboratoryExamsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createLaboratoryExams(
    @Args('input') input: CreateLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateLaboratoryExamsCommand(
      this._laboratoryExamsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateLaboratoryExams(
    @Args('input') { update, entityId }: UpdateLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateLaboratoryExamsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteLaboratoryExams(
    @Args('input') { entityId }: DeleteLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteLaboratoryExamsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyLaboratoryExams(
    @Args('input') input: DeleteManyLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyLaboratoryExamsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[LaboratoryExamsResponse])
  async getAllLaboratoryExams(
    @Args('input', { nullable: true }) input: GetAllLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<LaboratoryExamsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<LaboratoryExamsEntity>>>(new GetAllLaboratoryExamsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._laboratoryExamsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.GET_ONE})
  @Query(() => LaboratoryExamsResponse, { nullable: true })
  async getOneLaboratoryExams(
    @Args('input', { nullable: true }) input: GetOneLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<LaboratoryExamsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<LaboratoryExamsEntity>>(new GetOneLaboratoryExamsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._laboratoryExamsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['LABORATORY_EXAMS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedLaboratoryExamsResponse, { nullable: true })
  async getPaginatedLaboratoryExams(
    @Args('input', { nullable: true }) input: GetPaginatedLaboratoryExamsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedLaboratoryExamsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<LaboratoryExamsEntity>>>(new GetPaginatedLaboratoryExamsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._laboratoryExamsMapper.persistent2Dto),
    };
  }


}

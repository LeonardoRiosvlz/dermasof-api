import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFloorInput } from '../dto/inputs/create-floor.input';
import { FloorResponse } from '../dto/responses/floor.response';
import { GetAllFloorInput } from '../dto/inputs/get-all-floor.input';
import { DeleteFloorInput } from '../dto/inputs/delete-floor.input';
import { CreateFloorCommand } from '../../cqrs/commands/impl/create-floor.command';
import { DeleteFloorCommand } from '../../cqrs/commands/impl/delete-floor.command';
import { GetAllFloorQuery } from '../../cqrs/queries/impl/get-all-floor.query';
import { FloorMapper } from '../../mapper/floor.mapper';
import { UpdateFloorInput } from '../dto/inputs/update-floor.input';
import { UpdateFloorCommand } from '../../cqrs/commands/impl/update-floor.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFloorInput } from '../dto/inputs/get-paginated-floor.input';
import { PaginatedFloorResponse } from '../dto/responses/paginated-floor.response';
import { GetPaginatedFloorQuery } from '../../cqrs/queries/impl/get-paginated-floor.query';
import { GetOneFloorInput } from '../dto/inputs/get-one-floor.input';
import { GetOneFloorQuery } from '../../cqrs/queries/impl/get-one-floor.query';
import { DeleteManyFloorInput } from '../dto/inputs/delete-many-floor.input';
import { DeleteManyFloorCommand } from '../../cqrs/commands/impl/delete-many-floor.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FloorEntity } from '../../entities/floor.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { HeadquartersEntity } from '../../../../entities/headquarters.entity';
import { GetOneHeadquartersQuery } from '../../../../cqrs/queries/impl/get-one-headquarters.query';

@Resolver(() => FloorResponse)
export class FloorResolver extends BaseResolver {
  constructor(
    private readonly _floorMapper: FloorMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFloor(
    @Args('input') input: CreateFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFloorCommand(
      this._floorMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFloor(
    @Args('input') { update, entityId }: UpdateFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFloorCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFloor(
    @Args('input') { entityId }: DeleteFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFloorCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFloor(
    @Args('input') input: DeleteManyFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFloorCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FloorResponse])
  async getAllFloor(
    @Args('input', { nullable: true }) input: GetAllFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FloorResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FloorEntity>>>(new GetAllFloorQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._floorMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.GET_ONE})
  @Query(() => FloorResponse, { nullable: true })
  async getOneFloor(
    @Args('input', { nullable: true }) input: GetOneFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FloorResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FloorEntity>>(new GetOneFloorQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._floorMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FLOOR'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFloorResponse, { nullable: true })
  async getPaginatedFloor(
    @Args('input', { nullable: true }) input: GetPaginatedFloorInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFloorResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FloorEntity>>>(new GetPaginatedFloorQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._floorMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async headquarter(@Parent() parent?: FloorResponse): Promise<SolvedEntityResponse> {
    if (parent?.headquarter) {
      const hdOrErr = await this._cqrsBus.execQuery<Result<HeadquartersEntity>>(new GetOneHeadquartersQuery({where:{
          id: {eq: parent.headquarter.id}
        }}));
      if (hdOrErr.isFailure) {
        return null;
      }
      const hd = hdOrErr.unwrap();

      return {
        id: hd.id,
        entityName: HeadquartersEntity.name,
        identifier: hd.name,
      }

    }
  }


}

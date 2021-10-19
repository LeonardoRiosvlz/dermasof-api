import { Args, Mutation, Query, Resolver, ResolveField , Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateOfficeInput } from '../dto/inputs/create-office.input';
import { OfficeResponse } from '../dto/responses/office.response';
import { GetAllOfficeInput } from '../dto/inputs/get-all-office.input';
import { DeleteOfficeInput } from '../dto/inputs/delete-office.input';
import { CreateOfficeCommand } from '../../cqrs/commands/impl/create-office.command';
import { DeleteOfficeCommand } from '../../cqrs/commands/impl/delete-office.command';
import { GetAllOfficeQuery } from '../../cqrs/queries/impl/get-all-office.query';
import { OfficeMapper } from '../../mapper/office.mapper';
import { UpdateOfficeInput } from '../dto/inputs/update-office.input';
import { UpdateOfficeCommand } from '../../cqrs/commands/impl/update-office.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedOfficeInput } from '../dto/inputs/get-paginated-office.input';
import { PaginatedOfficeResponse } from '../dto/responses/paginated-office.response';
import { GetPaginatedOfficeQuery } from '../../cqrs/queries/impl/get-paginated-office.query';
import { GetOneOfficeInput } from '../dto/inputs/get-one-office.input';
import { GetOneOfficeQuery } from '../../cqrs/queries/impl/get-one-office.query';
import { DeleteManyOfficeInput } from '../dto/inputs/delete-many-office.input';
import { DeleteManyOfficeCommand } from '../../cqrs/commands/impl/delete-many-office.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { OfficeEntity } from '../../entities/office.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { HeadquartersEntity } from 'src/modules/headquarters/entities/headquarters.entity';
import { GetOneHeadquartersQuery } from 'src/modules/headquarters/cqrs/queries/impl/get-one-headquarters.query';
import { FloorEntity } from '../../../floor/entities/floor.entity';
import { GetOneFloorQuery } from '../../../floor/cqrs/queries/impl/get-one-floor.query';

@Resolver(() => OfficeResponse)
export class OfficeResolver extends BaseResolver {
  constructor(
    private readonly _officeMapper: OfficeMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }



   @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createOffice(
    @Args('input') input: CreateOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateOfficeCommand(
      this._officeMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateOffice(
    @Args('input') { update, entityId }: UpdateOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateOfficeCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteOffice(
    @Args('input') { entityId }: DeleteOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteOfficeCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyOffice(
    @Args('input') input: DeleteManyOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyOfficeCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[OfficeResponse])
  async getAllOffice(
    @Args('input', { nullable: true }) input: GetAllOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<OfficeResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<OfficeEntity>>>(new GetAllOfficeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._officeMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.GET_ONE})
  @Query(() => OfficeResponse, { nullable: true })
  async getOneOffice(
    @Args('input', { nullable: true }) input: GetOneOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<OfficeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<OfficeEntity>>(new GetOneOfficeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._officeMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['OFFICE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedOfficeResponse, { nullable: true })
  async getPaginatedOffice(
    @Args('input', { nullable: true }) input: GetPaginatedOfficeInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedOfficeResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<OfficeEntity>>>(new GetPaginatedOfficeQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._officeMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async floor(@Parent() parent?: OfficeResponse): Promise<SolvedEntityResponse> {
    if (parent?.floor) {
      const floorOrErr = await this._cqrsBus.execQuery<Result<FloorEntity>>(new GetOneFloorQuery({where:{
          id: {eq: parent.floor.id}
        }}));
      if (floorOrErr.isFailure) {
        return null;
      }
      const floor = floorOrErr.unwrap();

      return {
        id: floor.id,
        entityName: FloorEntity.name,
        identifier: floor.name,
        fields: [
          {
            field: 'description',
            value: floor?.description
          },

          {
            field: 'location',
            value: `${floor?.location}`
          }
        ]
      }
    }
  }


}

import { Args, Mutation, Query, Resolver, Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateRegionInput } from '../dto/inputs/create-region.input';
import { RegionResponse } from '../dto/responses/region.response';
import { GetAllRegionInput } from '../dto/inputs/get-all-region.input';
import { DeleteRegionInput } from '../dto/inputs/delete-region.input';
import { CreateRegionCommand } from '../../cqrs/commands/impl/create-region.command';
import { DeleteRegionCommand } from '../../cqrs/commands/impl/delete-region.command';
import { GetAllRegionQuery } from '../../cqrs/queries/impl/get-all-region.query';
import { RegionMapper } from '../../mapper/region.mapper';
import { UpdateRegionInput } from '../dto/inputs/update-region.input';
import { UpdateRegionCommand } from '../../cqrs/commands/impl/update-region.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedRegionInput } from '../dto/inputs/get-paginated-region.input';
import { PaginatedRegionResponse } from '../dto/responses/paginated-region.response';
import { GetPaginatedRegionQuery } from '../../cqrs/queries/impl/get-paginated-region.query';
import { GetOneRegionInput } from '../dto/inputs/get-one-region.input';
import { GetOneRegionQuery } from '../../cqrs/queries/impl/get-one-region.query';
import { DeleteManyRegionInput } from '../dto/inputs/delete-many-region.input';
import { DeleteManyRegionCommand } from '../../cqrs/commands/impl/delete-many-region.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { RegionEntity } from '../../entities/region.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => RegionResponse)
export class RegionResolver extends BaseResolver {
  constructor(
    private readonly _regionMapper: RegionMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createRegion(
    @Args('input') input: CreateRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateRegionCommand(
      this._regionMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateRegion(
    @Args('input') { update, entityId }: UpdateRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateRegionCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteRegion(
    @Args('input') { entityId }: DeleteRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteRegionCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyRegion(
    @Args('input') input: DeleteManyRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyRegionCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[RegionResponse])
  async getAllRegion(
    @Args('input', { nullable: true }) input: GetAllRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<RegionResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<RegionEntity>>>(new GetAllRegionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._regionMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.GET_ONE})
  @Query(() => RegionResponse, { nullable: true })
  async getOneRegion(
    @Args('input', { nullable: true }) input: GetOneRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<RegionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<RegionEntity>>(new GetOneRegionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._regionMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['REGION'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedRegionResponse, { nullable: true })
  async getPaginatedRegion(
    @Args('input', { nullable: true }) input: GetPaginatedRegionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedRegionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<RegionEntity>>>(new GetPaginatedRegionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._regionMapper.persistent2Dto),
    };
  }


  
  @ResolveField(() => CloudFileResponse, { nullable: true })
  async photoFile(@Parent() parent?: RegionResponse): Promise<CloudFileResponse> {
    if (parent?.photoFile) {
      const iconOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.photoFile.id },
        },
      }));
      if (iconOrErr.isFailure) {
        return null;
      }
      const file = iconOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



}

import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesPhotographicReportInput } from '../dto/inputs/create-files-photographic-report.input';
import { FilesPhotographicReportResponse } from '../dto/responses/files-photographic-report.response';
import { GetAllFilesPhotographicReportInput } from '../dto/inputs/get-all-files-photographic-report.input';
import { DeleteFilesPhotographicReportInput } from '../dto/inputs/delete-files-photographic-report.input';
import { CreateFilesPhotographicReportCommand } from '../../cqrs/commands/impl/create-files-photographic-report.command';
import { DeleteFilesPhotographicReportCommand } from '../../cqrs/commands/impl/delete-files-photographic-report.command';
import { GetAllFilesPhotographicReportQuery } from '../../cqrs/queries/impl/get-all-files-photographic-report.query';
import { FilesPhotographicReportMapper } from '../../mapper/files-photographic-report.mapper';
import { UpdateFilesPhotographicReportInput } from '../dto/inputs/update-files-photographic-report.input';
import { UpdateFilesPhotographicReportCommand } from '../../cqrs/commands/impl/update-files-photographic-report.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesPhotographicReportInput } from '../dto/inputs/get-paginated-files-photographic-report.input';
import { PaginatedFilesPhotographicReportResponse } from '../dto/responses/paginated-files-photographic-report.response';
import { GetPaginatedFilesPhotographicReportQuery } from '../../cqrs/queries/impl/get-paginated-files-photographic-report.query';
import { GetOneFilesPhotographicReportInput } from '../dto/inputs/get-one-files-photographic-report.input';
import { GetOneFilesPhotographicReportQuery } from '../../cqrs/queries/impl/get-one-files-photographic-report.query';
import { DeleteManyFilesPhotographicReportInput } from '../dto/inputs/delete-many-files-photographic-report.input';
import { DeleteManyFilesPhotographicReportCommand } from '../../cqrs/commands/impl/delete-many-files-photographic-report.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesPhotographicReportEntity } from '../../entities/files-photographic-report.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesPhotographicReportResponse)
export class FilesPhotographicReportResolver extends BaseResolver {
  constructor(
    private readonly _filesPhotographicReportMapper: FilesPhotographicReportMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesPhotographicReport(
    @Args('input') input: CreateFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesPhotographicReportCommand(
      this._filesPhotographicReportMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesPhotographicReport(
    @Args('input') { update, entityId }: UpdateFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesPhotographicReportCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesPhotographicReport(
    @Args('input') { entityId }: DeleteFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesPhotographicReportCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesPhotographicReport(
    @Args('input') input: DeleteManyFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesPhotographicReportCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesPhotographicReportResponse])
  async getAllFilesPhotographicReport(
    @Args('input', { nullable: true }) input: GetAllFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesPhotographicReportResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesPhotographicReportEntity>>>(new GetAllFilesPhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesPhotographicReportMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesPhotographicReportResponse, { nullable: true })
  async getOneFilesPhotographicReport(
    @Args('input', { nullable: true }) input: GetOneFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesPhotographicReportResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesPhotographicReportEntity>>(new GetOneFilesPhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesPhotographicReportMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesPhotographicReportResponse, { nullable: true })
  async getPaginatedFilesPhotographicReport(
    @Args('input', { nullable: true }) input: GetPaginatedFilesPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesPhotographicReportResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesPhotographicReportEntity>>>(new GetPaginatedFilesPhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesPhotographicReportMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesPhotographicReportResponse): Promise<CloudFileResponse> {
    if (parent?.file) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.file.id },
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

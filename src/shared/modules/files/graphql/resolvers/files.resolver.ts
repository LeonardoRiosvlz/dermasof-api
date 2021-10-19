import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesInput } from '../dto/inputs/create-files.input';
import { FilesResponse } from '../dto/responses/files.response';
import { GetAllFilesInput } from '../dto/inputs/get-all-files.input';
import { DeleteFilesInput } from '../dto/inputs/delete-files.input';
import { CreateFilesCommand } from '../../cqrs/commands/impl/create-files.command';
import { DeleteFilesCommand } from '../../cqrs/commands/impl/delete-files.command';
import { GetAllFilesQuery } from '../../cqrs/queries/impl/get-all-files.query';
import { FilesMapper } from '../../mapper/files.mapper';
import { UpdateFilesInput } from '../dto/inputs/update-files.input';
import { UpdateFilesCommand } from '../../cqrs/commands/impl/update-files.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesInput } from '../dto/inputs/get-paginated-files.input';
import { PaginatedFilesResponse } from '../dto/responses/paginated-files.response';
import { GetPaginatedFilesQuery } from '../../cqrs/queries/impl/get-paginated-files.query';
import { GetOneFilesInput } from '../dto/inputs/get-one-files.input';
import { GetOneFilesQuery } from '../../cqrs/queries/impl/get-one-files.query';
import { DeleteManyFilesInput } from '../dto/inputs/delete-many-files.input';
import { DeleteManyFilesCommand } from '../../cqrs/commands/impl/delete-many-files.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesEntity } from '../../entities/files.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileIdResponse } from '../../../graphql/dto/responses/cloud-file.response';
import { GetUploadSignedUrlInput } from '../dto/inputs/get-upload-signed-url.input';
import { ICloudId } from '../../interfaces/ICloudFileService';
import { GetUploadSignedUrlQuery } from '../../cqrs/queries/impl/get-upload-signed-url.query';
import { CreateUploadedFileInput } from '../dto/inputs/create-uploaded-file.input';
import { CreateUploadedFileCommand } from '../../cqrs/commands/impl/create-uploaded-file.command';


@Resolver(() => FilesResponse)
export class FilesResolver extends BaseResolver {
  constructor(
    private readonly _filesMapper: FilesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.FILES_GET_WRITE_SIGNED_URL })
  @Query(() => CloudFileIdResponse)
  async getWriteSignedUrl(
    @Args('input') input: GetUploadSignedUrlInput,
    @CurrentLanguage() lang?: string,
  ): Promise<CloudFileIdResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ICloudId>>(new GetUploadSignedUrlQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.FILES_CREATE_UPLOADED_FILE })
  @UseGuards(GqlAuthGuard)
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createUploadedFile(
    @Args('input') input: CreateUploadedFileInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateUploadedFileCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFiles(
    @Args('input') input: CreateFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesCommand(
      this._filesMapper.dtoInput2Persistent(input),
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFiles(
    @Args('input') { update, entityId }: UpdateFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesCommand(entityId, update));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.DELETE_ONE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFiles(
    @Args('input') { entityId }: DeleteFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.DELETE_MANY })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFiles(
    @Args('input') input: DeleteManyFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.GET_ALL })
  async getAllFiles(
    @Args('input', { nullable: true }) input: GetAllFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesEntity>>>(new GetAllFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => FilesResponse, { nullable: true })
  async getOneFiles(
    @Args('input', { nullable: true }) input: GetOneFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['FILES'], action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedFilesResponse, { nullable: true })
  async getPaginatedFiles(
    @Args('input', { nullable: true }) input: GetPaginatedFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesEntity>>>(new GetPaginatedFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesMapper.persistent2Dto),
    };
  }

}

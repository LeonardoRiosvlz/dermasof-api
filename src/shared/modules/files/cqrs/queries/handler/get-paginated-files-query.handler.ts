import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedFilesQuery } from '../impl/get-paginated-files.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@QueryHandler(GetPaginatedFilesQuery)
export class GetPaginatedFilesQueryHandler extends GetPaginatedQueryHandler<FilesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesEntityService.name)
  }

}

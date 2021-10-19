import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneFilesQuery } from '../impl/get-one-files.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@QueryHandler(GetOneFilesQuery)
export class GetOneFilesQueryHandler extends GetOneQueryHandler<FilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesEntityService.name)
  }
}


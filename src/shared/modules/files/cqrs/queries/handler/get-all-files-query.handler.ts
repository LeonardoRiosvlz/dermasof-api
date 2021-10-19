import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllFilesQuery } from '../impl/get-all-files.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@QueryHandler(GetAllFilesQuery)
export class GetAllFilesQueryHandler extends GetAllQueryHandler<FilesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, FilesEntityService.name)
  }

}

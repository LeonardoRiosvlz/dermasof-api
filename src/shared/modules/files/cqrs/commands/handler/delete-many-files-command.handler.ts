import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesCommand } from '../impl/delete-many-files.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@CommandHandler(DeleteManyFilesCommand)
export class DeleteManyFilesCommandHandler extends DeleteManyCommandHandler<FilesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesEntityService.name)
  }

}

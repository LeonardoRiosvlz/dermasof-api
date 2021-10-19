import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesCommand } from '../impl/create-files.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@CommandHandler(CreateFilesCommand)
export class CreateFilesCommandHandler extends CreateCommandHandler<FilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesEntityService.name);
  }

}

import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesCommand } from '../impl/update-files.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesEntityService } from '../../../services/files-entity.service';
import { FilesEntity } from '../../../entities/files.entity';

@CommandHandler(UpdateFilesCommand)
export class UpdateFilesCommandHandler extends UpdateCommandHandler<FilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesEntityService.name)
  }

}

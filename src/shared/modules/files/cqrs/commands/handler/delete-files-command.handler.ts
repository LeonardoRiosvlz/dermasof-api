import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesCommand } from '../impl/delete-files.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesEntity } from '../../../entities/files.entity';
import { FilesEntityService } from '../../../services/files-entity.service';

@CommandHandler(DeleteFilesCommand)
export class DeleteFilesCommandHandler extends DeleteCommandHandler<FilesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesEntityService.name)
  }
}

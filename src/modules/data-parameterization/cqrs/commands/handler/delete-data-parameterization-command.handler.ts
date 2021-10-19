import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDataParameterizationCommand } from '../impl/delete-data-parameterization.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@CommandHandler(DeleteDataParameterizationCommand)
export class DeleteDataParameterizationCommandHandler extends DeleteCommandHandler<DataParameterizationEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DataParameterizationEntityService.name)
  }
}

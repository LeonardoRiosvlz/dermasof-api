import { CommandHandler } from '@nestjs/cqrs';
import { DeleteConsultationTypeCommand } from '../impl/delete-consultation-type.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@CommandHandler(DeleteConsultationTypeCommand)
export class DeleteConsultationTypeCommandHandler extends DeleteCommandHandler<ConsultationTypeEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ConsultationTypeEntityService.name)
  }
}

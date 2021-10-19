import { CommandHandler } from '@nestjs/cqrs';
import { DeleteLaboratoryExamsCommand } from '../impl/delete-laboratory-exams.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@CommandHandler(DeleteLaboratoryExamsCommand)
export class DeleteLaboratoryExamsCommandHandler extends DeleteCommandHandler<LaboratoryExamsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, LaboratoryExamsEntityService.name)
  }
}

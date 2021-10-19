import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDiagnosisTypeCommand } from '../impl/delete-diagnosis-type.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@CommandHandler(DeleteDiagnosisTypeCommand)
export class DeleteDiagnosisTypeCommandHandler extends DeleteCommandHandler<DiagnosisTypeEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiagnosisTypeEntityService.name)
  }
}

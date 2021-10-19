import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDiagnosisCommand } from '../impl/delete-diagnosis.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@CommandHandler(DeleteDiagnosisCommand)
export class DeleteDiagnosisCommandHandler extends DeleteCommandHandler<DiagnosisEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiagnosisEntityService.name)
  }
}

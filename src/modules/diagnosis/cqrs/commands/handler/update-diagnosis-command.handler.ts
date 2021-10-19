import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDiagnosisCommand } from '../impl/update-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';

@CommandHandler(UpdateDiagnosisCommand)
export class UpdateDiagnosisCommandHandler extends UpdateCommandHandler<DiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiagnosisEntityService.name)
  }

}

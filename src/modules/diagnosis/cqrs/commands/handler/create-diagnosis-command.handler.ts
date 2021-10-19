import { CommandHandler } from '@nestjs/cqrs';

import { CreateDiagnosisCommand } from '../impl/create-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@CommandHandler(CreateDiagnosisCommand)
export class CreateDiagnosisCommandHandler extends CreateCommandHandler<DiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiagnosisEntityService.name);
  }

}

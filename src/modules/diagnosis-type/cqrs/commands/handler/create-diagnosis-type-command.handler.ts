import { CommandHandler } from '@nestjs/cqrs';

import { CreateDiagnosisTypeCommand } from '../impl/create-diagnosis-type.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@CommandHandler(CreateDiagnosisTypeCommand)
export class CreateDiagnosisTypeCommandHandler extends CreateCommandHandler<DiagnosisTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiagnosisTypeEntityService.name);
  }

}

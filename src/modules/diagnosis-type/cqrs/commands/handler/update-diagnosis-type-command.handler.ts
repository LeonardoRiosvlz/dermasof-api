import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDiagnosisTypeCommand } from '../impl/update-diagnosis-type.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';

@CommandHandler(UpdateDiagnosisTypeCommand)
export class UpdateDiagnosisTypeCommandHandler extends UpdateCommandHandler<DiagnosisTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DiagnosisTypeEntityService.name)
  }

}

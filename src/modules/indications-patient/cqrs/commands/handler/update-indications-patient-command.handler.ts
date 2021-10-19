import { CommandHandler } from '@nestjs/cqrs';
import { UpdateIndicationsPatientCommand } from '../impl/update-indications-patient.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';

@CommandHandler(UpdateIndicationsPatientCommand)
export class UpdateIndicationsPatientCommandHandler extends UpdateCommandHandler<IndicationsPatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IndicationsPatientEntityService.name)
  }

}

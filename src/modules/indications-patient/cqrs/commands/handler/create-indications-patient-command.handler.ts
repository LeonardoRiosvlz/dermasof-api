import { CommandHandler } from '@nestjs/cqrs';

import { CreateIndicationsPatientCommand } from '../impl/create-indications-patient.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@CommandHandler(CreateIndicationsPatientCommand)
export class CreateIndicationsPatientCommandHandler extends CreateCommandHandler<IndicationsPatientEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IndicationsPatientEntityService.name);
  }

}

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyIndicationsPatientCommand } from '../impl/delete-many-indications-patient.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { IndicationsPatientEntityService } from '../../../services/indications-patient-entity.service';

@CommandHandler(DeleteManyIndicationsPatientCommand)
export class DeleteManyIndicationsPatientCommandHandler extends DeleteManyCommandHandler<IndicationsPatientEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IndicationsPatientEntityService.name)
  }

}

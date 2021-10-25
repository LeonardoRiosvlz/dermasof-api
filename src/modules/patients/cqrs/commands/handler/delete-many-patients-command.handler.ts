import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPatientsCommand } from '../impl/delete-many-patients.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PatientsEntity } from '../../../entities/patients.entity';
import { PatientsEntityService } from '../../../services/patients-entity.service';

@CommandHandler(DeleteManyPatientsCommand)
export class DeleteManyPatientsCommandHandler extends DeleteManyCommandHandler<PatientsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PatientsEntityService.name)
  }

}

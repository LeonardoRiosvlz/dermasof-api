import { CommandHandler } from '@nestjs/cqrs';

import { CreatePatientsCommand } from '../impl/create-patients.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PatientsEntity } from '../../../entities/patients.entity';
import { PatientsEntityService } from '../../../services/patients-entity.service';

@CommandHandler(CreatePatientsCommand)
export class CreatePatientsCommandHandler extends CreateCommandHandler<PatientsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientsEntityService.name);
  }

}

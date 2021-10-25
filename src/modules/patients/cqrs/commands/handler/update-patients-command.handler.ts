import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientsCommand } from '../impl/update-patients.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PatientsEntityService } from '../../../services/patients-entity.service';
import { PatientsEntity } from '../../../entities/patients.entity';

@CommandHandler(UpdatePatientsCommand)
export class UpdatePatientsCommandHandler extends UpdateCommandHandler<PatientsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PatientsEntityService.name)
  }

}

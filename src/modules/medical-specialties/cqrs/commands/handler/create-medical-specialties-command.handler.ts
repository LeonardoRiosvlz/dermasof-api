import { CommandHandler } from '@nestjs/cqrs';

import { CreateMedicalSpecialtiesCommand } from '../impl/create-medical-specialties.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@CommandHandler(CreateMedicalSpecialtiesCommand)
export class CreateMedicalSpecialtiesCommandHandler extends CreateCommandHandler<MedicalSpecialtiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicalSpecialtiesEntityService.name);
  }

}

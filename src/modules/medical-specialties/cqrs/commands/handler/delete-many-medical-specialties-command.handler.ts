import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyMedicalSpecialtiesCommand } from '../impl/delete-many-medical-specialties.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@CommandHandler(DeleteManyMedicalSpecialtiesCommand)
export class DeleteManyMedicalSpecialtiesCommandHandler extends DeleteManyCommandHandler<MedicalSpecialtiesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }

}

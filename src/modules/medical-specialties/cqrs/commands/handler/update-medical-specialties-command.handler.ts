import { CommandHandler } from '@nestjs/cqrs';
import { UpdateMedicalSpecialtiesCommand } from '../impl/update-medical-specialties.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';

@CommandHandler(UpdateMedicalSpecialtiesCommand)
export class UpdateMedicalSpecialtiesCommandHandler extends UpdateCommandHandler<MedicalSpecialtiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }

}

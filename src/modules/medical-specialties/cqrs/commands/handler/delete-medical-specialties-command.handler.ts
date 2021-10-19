import { CommandHandler } from '@nestjs/cqrs';
import { DeleteMedicalSpecialtiesCommand } from '../impl/delete-medical-specialties.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@CommandHandler(DeleteMedicalSpecialtiesCommand)
export class DeleteMedicalSpecialtiesCommandHandler extends DeleteCommandHandler<MedicalSpecialtiesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }
}

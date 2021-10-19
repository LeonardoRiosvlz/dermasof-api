import { CreateMedicalSpecialtiesCommandHandler } from './handler/create-medical-specialties-command.handler';
import { DeleteMedicalSpecialtiesCommandHandler } from './handler/delete-medical-specialties-command.handler';
import { UpdateMedicalSpecialtiesCommandHandler } from './handler/update-medical-specialties-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyMedicalSpecialtiesCommandHandler } from './handler/delete-many-medical-specialties-command.handler';

export const MedicalSpecialtiesCommandHandlers: Array<Provider> = [
  CreateMedicalSpecialtiesCommandHandler,
  DeleteMedicalSpecialtiesCommandHandler,
  UpdateMedicalSpecialtiesCommandHandler,
  DeleteManyMedicalSpecialtiesCommandHandler
];

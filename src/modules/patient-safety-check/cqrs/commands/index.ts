import { CreatePatientSafetyCheckCommandHandler } from './handler/create-patient-safety-check-command.handler';
import { DeletePatientSafetyCheckCommandHandler } from './handler/delete-patient-safety-check-command.handler';
import { UpdatePatientSafetyCheckCommandHandler } from './handler/update-patient-safety-check-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPatientSafetyCheckCommandHandler } from './handler/delete-many-patient-safety-check-command.handler';

export const PatientSafetyCheckCommandHandlers: Array<Provider> = [
  CreatePatientSafetyCheckCommandHandler,
  DeletePatientSafetyCheckCommandHandler,
  UpdatePatientSafetyCheckCommandHandler,
  DeleteManyPatientSafetyCheckCommandHandler
];

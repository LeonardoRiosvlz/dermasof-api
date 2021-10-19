import { CreatePatientDataSettingsCommandHandler } from './handler/create-patient-data-settings-command.handler';
import { DeletePatientDataSettingsCommandHandler } from './handler/delete-patient-data-settings-command.handler';
import { UpdatePatientDataSettingsCommandHandler } from './handler/update-patient-data-settings-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPatientDataSettingsCommandHandler } from './handler/delete-many-patient-data-settings-command.handler';

export const PatientDataSettingsCommandHandlers: Array<Provider> = [
  CreatePatientDataSettingsCommandHandler,
  DeletePatientDataSettingsCommandHandler,
  UpdatePatientDataSettingsCommandHandler,
  DeleteManyPatientDataSettingsCommandHandler
];

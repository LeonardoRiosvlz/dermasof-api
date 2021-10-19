import { CreateIndicationsPatientCommandHandler } from './handler/create-indications-patient-command.handler';
import { DeleteIndicationsPatientCommandHandler } from './handler/delete-indications-patient-command.handler';
import { UpdateIndicationsPatientCommandHandler } from './handler/update-indications-patient-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyIndicationsPatientCommandHandler } from './handler/delete-many-indications-patient-command.handler';

export const IndicationsPatientCommandHandlers: Array<Provider> = [
  CreateIndicationsPatientCommandHandler,
  DeleteIndicationsPatientCommandHandler,
  UpdateIndicationsPatientCommandHandler,
  DeleteManyIndicationsPatientCommandHandler
];

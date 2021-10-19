import { CreateDiagnosisCommandHandler } from './handler/create-diagnosis-command.handler';
import { DeleteDiagnosisCommandHandler } from './handler/delete-diagnosis-command.handler';
import { UpdateDiagnosisCommandHandler } from './handler/update-diagnosis-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDiagnosisCommandHandler } from './handler/delete-many-diagnosis-command.handler';

export const DiagnosisCommandHandlers: Array<Provider> = [
  CreateDiagnosisCommandHandler,
  DeleteDiagnosisCommandHandler,
  UpdateDiagnosisCommandHandler,
  DeleteManyDiagnosisCommandHandler
];

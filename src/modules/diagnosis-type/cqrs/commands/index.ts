import { CreateDiagnosisTypeCommandHandler } from './handler/create-diagnosis-type-command.handler';
import { DeleteDiagnosisTypeCommandHandler } from './handler/delete-diagnosis-type-command.handler';
import { UpdateDiagnosisTypeCommandHandler } from './handler/update-diagnosis-type-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDiagnosisTypeCommandHandler } from './handler/delete-many-diagnosis-type-command.handler';

export const DiagnosisTypeCommandHandlers: Array<Provider> = [
  CreateDiagnosisTypeCommandHandler,
  DeleteDiagnosisTypeCommandHandler,
  UpdateDiagnosisTypeCommandHandler,
  DeleteManyDiagnosisTypeCommandHandler
];

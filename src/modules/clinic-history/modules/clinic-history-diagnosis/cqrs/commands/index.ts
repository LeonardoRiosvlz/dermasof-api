import { CreateClinicHistoryDiagnosisCommandHandler } from './handler/create-clinic-history-diagnosis-command.handler';
import { DeleteClinicHistoryDiagnosisCommandHandler } from './handler/delete-clinic-history-diagnosis-command.handler';
import { UpdateClinicHistoryDiagnosisCommandHandler } from './handler/update-clinic-history-diagnosis-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClinicHistoryDiagnosisCommandHandler } from './handler/delete-many-clinic-history-diagnosis-command.handler';

export const ClinicHistoryDiagnosisCommandHandlers: Array<Provider> = [
  CreateClinicHistoryDiagnosisCommandHandler,
  DeleteClinicHistoryDiagnosisCommandHandler,
  UpdateClinicHistoryDiagnosisCommandHandler,
  DeleteManyClinicHistoryDiagnosisCommandHandler
];

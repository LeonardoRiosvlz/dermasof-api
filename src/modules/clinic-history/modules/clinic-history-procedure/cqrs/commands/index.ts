import { CreateClinicHistoryProcedureCommandHandler } from './handler/create-clinic-history-procedure-command.handler';
import { DeleteClinicHistoryProcedureCommandHandler } from './handler/delete-clinic-history-procedure-command.handler';
import { UpdateClinicHistoryProcedureCommandHandler } from './handler/update-clinic-history-procedure-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClinicHistoryProcedureCommandHandler } from './handler/delete-many-clinic-history-procedure-command.handler';

export const ClinicHistoryProcedureCommandHandlers: Array<Provider> = [
  CreateClinicHistoryProcedureCommandHandler,
  DeleteClinicHistoryProcedureCommandHandler,
  UpdateClinicHistoryProcedureCommandHandler,
  DeleteManyClinicHistoryProcedureCommandHandler
];

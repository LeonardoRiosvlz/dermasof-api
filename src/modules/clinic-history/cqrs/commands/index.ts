import { CreateClinicHistoryCommandHandler } from './handler/create-clinic-history-command.handler';
import { DeleteClinicHistoryCommandHandler } from './handler/delete-clinic-history-command.handler';
import { UpdateClinicHistoryCommandHandler } from './handler/update-clinic-history-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClinicHistoryCommandHandler } from './handler/delete-many-clinic-history-command.handler';

export const ClinicHistoryCommandHandlers: Array<Provider> = [
  CreateClinicHistoryCommandHandler,
  DeleteClinicHistoryCommandHandler,
  UpdateClinicHistoryCommandHandler,
  DeleteManyClinicHistoryCommandHandler
];

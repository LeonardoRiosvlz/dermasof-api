import { CreateProceduresCommandHandler } from './handler/create-procedures-command.handler';
import { DeleteProceduresCommandHandler } from './handler/delete-procedures-command.handler';
import { UpdateProceduresCommandHandler } from './handler/update-procedures-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyProceduresCommandHandler } from './handler/delete-many-procedures-command.handler';

export const ProceduresCommandHandlers: Array<Provider> = [
  CreateProceduresCommandHandler,
  DeleteProceduresCommandHandler,
  UpdateProceduresCommandHandler,
  DeleteManyProceduresCommandHandler
];

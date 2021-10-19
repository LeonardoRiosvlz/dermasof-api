import { CreatePathologiesCommandHandler } from './handler/create-pathologies-command.handler';
import { DeletePathologiesCommandHandler } from './handler/delete-pathologies-command.handler';
import { UpdatePathologiesCommandHandler } from './handler/update-pathologies-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPathologiesCommandHandler } from './handler/delete-many-pathologies-command.handler';

export const PathologiesCommandHandlers: Array<Provider> = [
  CreatePathologiesCommandHandler,
  DeletePathologiesCommandHandler,
  UpdatePathologiesCommandHandler,
  DeleteManyPathologiesCommandHandler
];

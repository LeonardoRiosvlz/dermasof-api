import { CreateFloorCommandHandler } from './handler/create-floor-command.handler';
import { DeleteFloorCommandHandler } from './handler/delete-floor-command.handler';
import { UpdateFloorCommandHandler } from './handler/update-floor-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFloorCommandHandler } from './handler/delete-many-floor-command.handler';

export const FloorCommandHandlers: Array<Provider> = [
  CreateFloorCommandHandler,
  DeleteFloorCommandHandler,
  UpdateFloorCommandHandler,
  DeleteManyFloorCommandHandler
];

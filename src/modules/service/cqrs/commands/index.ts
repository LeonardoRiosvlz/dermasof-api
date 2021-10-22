import { CreateServiceCommandHandler } from './handler/create-service-command.handler';
import { DeleteServiceCommandHandler } from './handler/delete-service-command.handler';
import { UpdateServiceCommandHandler } from './handler/update-service-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyServiceCommandHandler } from './handler/delete-many-service-command.handler';

export const ServiceCommandHandlers: Array<Provider> = [
  CreateServiceCommandHandler,
  DeleteServiceCommandHandler,
  UpdateServiceCommandHandler,
  DeleteManyServiceCommandHandler
];

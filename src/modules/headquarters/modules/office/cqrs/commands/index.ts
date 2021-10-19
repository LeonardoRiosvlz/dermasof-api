import { CreateOfficeCommandHandler } from './handler/create-office-command.handler';
import { DeleteOfficeCommandHandler } from './handler/delete-office-command.handler';
import { UpdateOfficeCommandHandler } from './handler/update-office-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyOfficeCommandHandler } from './handler/delete-many-office-command.handler';

export const OfficeCommandHandlers: Array<Provider> = [
  CreateOfficeCommandHandler,
  DeleteOfficeCommandHandler,
  UpdateOfficeCommandHandler,
  DeleteManyOfficeCommandHandler
];

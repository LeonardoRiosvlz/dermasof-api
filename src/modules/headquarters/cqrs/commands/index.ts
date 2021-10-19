import { CreateHeadquartersCommandHandler } from './handler/create-headquarters-command.handler';
import { DeleteHeadquartersCommandHandler } from './handler/delete-headquarters-command.handler';
import { UpdateHeadquartersCommandHandler } from './handler/update-headquarters-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyHeadquartersCommandHandler } from './handler/delete-many-headquarters-command.handler';

export const HeadquartersCommandHandlers: Array<Provider> = [
  CreateHeadquartersCommandHandler,
  DeleteHeadquartersCommandHandler,
  UpdateHeadquartersCommandHandler,
  DeleteManyHeadquartersCommandHandler
];

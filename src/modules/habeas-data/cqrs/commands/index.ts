import { CreateHabeasDataCommandHandler } from './handler/create-habeas-data-command.handler';
import { DeleteHabeasDataCommandHandler } from './handler/delete-habeas-data-command.handler';
import { UpdateHabeasDataCommandHandler } from './handler/update-habeas-data-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyHabeasDataCommandHandler } from './handler/delete-many-habeas-data-command.handler';

export const HabeasDataCommandHandlers: Array<Provider> = [
  CreateHabeasDataCommandHandler,
  DeleteHabeasDataCommandHandler,
  UpdateHabeasDataCommandHandler,
  DeleteManyHabeasDataCommandHandler
];

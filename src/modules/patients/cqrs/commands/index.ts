import { CreatePatientsCommandHandler } from './handler/create-patients-command.handler';
import { DeletePatientsCommandHandler } from './handler/delete-patients-command.handler';
import { UpdatePatientsCommandHandler } from './handler/update-patients-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPatientsCommandHandler } from './handler/delete-many-patients-command.handler';

export const PatientsCommandHandlers: Array<Provider> = [
  CreatePatientsCommandHandler,
  DeletePatientsCommandHandler,
  UpdatePatientsCommandHandler,
  DeleteManyPatientsCommandHandler
];

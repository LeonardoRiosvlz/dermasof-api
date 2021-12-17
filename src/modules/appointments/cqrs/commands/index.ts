import { CreateAppointmentsCommandHandler } from './handler/create-appointments-command.handler';
import { DeleteAppointmentsCommandHandler } from './handler/delete-appointments-command.handler';
import { UpdateAppointmentsCommandHandler } from './handler/update-appointments-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyAppointmentsCommandHandler } from './handler/delete-many-appointments-command.handler';

export const AppointmentsCommandHandlers: Array<Provider> = [
  CreateAppointmentsCommandHandler,
  DeleteAppointmentsCommandHandler,
  UpdateAppointmentsCommandHandler,
  DeleteManyAppointmentsCommandHandler
];

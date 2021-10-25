import { CreateConsultationTypeCommandHandler } from './handler/create-consultation-type-command.handler';
import { DeleteConsultationTypeCommandHandler } from './handler/delete-consultation-type-command.handler';
import { UpdateConsultationTypeCommandHandler } from './handler/update-consultation-type-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyConsultationTypeCommandHandler } from './handler/delete-many-consultation-type-command.handler';

export const ConsultationTypeCommandHandlers: Array<Provider> = [
  CreateConsultationTypeCommandHandler,
  DeleteConsultationTypeCommandHandler,
  UpdateConsultationTypeCommandHandler,
  DeleteManyConsultationTypeCommandHandler
];

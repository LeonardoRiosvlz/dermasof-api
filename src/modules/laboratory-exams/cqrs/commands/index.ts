import { CreateLaboratoryExamsCommandHandler } from './handler/create-laboratory-exams-command.handler';
import { DeleteLaboratoryExamsCommandHandler } from './handler/delete-laboratory-exams-command.handler';
import { UpdateLaboratoryExamsCommandHandler } from './handler/update-laboratory-exams-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyLaboratoryExamsCommandHandler } from './handler/delete-many-laboratory-exams-command.handler';

export const LaboratoryExamsCommandHandlers: Array<Provider> = [
  CreateLaboratoryExamsCommandHandler,
  DeleteLaboratoryExamsCommandHandler,
  UpdateLaboratoryExamsCommandHandler,
  DeleteManyLaboratoryExamsCommandHandler
];

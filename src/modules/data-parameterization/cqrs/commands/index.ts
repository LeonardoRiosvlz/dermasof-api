import { CreateDataParameterizationCommandHandler } from './handler/create-data-parameterization-command.handler';
import { DeleteDataParameterizationCommandHandler } from './handler/delete-data-parameterization-command.handler';
import { UpdateDataParameterizationCommandHandler } from './handler/update-data-parameterization-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyDataParameterizationCommandHandler } from './handler/delete-many-data-parameterization-command.handler';

export const DataParameterizationCommandHandlers: Array<Provider> = [
  CreateDataParameterizationCommandHandler,
  DeleteDataParameterizationCommandHandler,
  UpdateDataParameterizationCommandHandler,
  DeleteManyDataParameterizationCommandHandler
];

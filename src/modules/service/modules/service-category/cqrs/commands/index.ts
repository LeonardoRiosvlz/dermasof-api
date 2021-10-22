import { CreateServiceCategoryCommandHandler } from './handler/create-service-category-command.handler';
import { DeleteServiceCategoryCommandHandler } from './handler/delete-service-category-command.handler';
import { UpdateServiceCategoryCommandHandler } from './handler/update-service-category-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyServiceCategoryCommandHandler } from './handler/delete-many-service-category-command.handler';

export const ServiceCategoryCommandHandlers: Array<Provider> = [
  CreateServiceCategoryCommandHandler,
  DeleteServiceCategoryCommandHandler,
  UpdateServiceCategoryCommandHandler,
  DeleteManyServiceCategoryCommandHandler
];

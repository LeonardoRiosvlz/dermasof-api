import { CreateProductCommandHandler } from './handler/create-product-command.handler';
import { DeleteProductCommandHandler } from './handler/delete-product-command.handler';
import { UpdateProductCommandHandler } from './handler/update-product-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyProductCommandHandler } from './handler/delete-many-product-command.handler';

export const ProductCommandHandlers: Array<Provider> = [
  CreateProductCommandHandler,
  DeleteProductCommandHandler,
  UpdateProductCommandHandler,
  DeleteManyProductCommandHandler
];

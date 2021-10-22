import { CreateProductCategoryCommandHandler } from './handler/create-product-category-command.handler';
import { DeleteProductCategoryCommandHandler } from './handler/delete-product-category-command.handler';
import { UpdateProductCategoryCommandHandler } from './handler/update-product-category-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyProductCategoryCommandHandler } from './handler/delete-many-product-category-command.handler';

export const ProductCategoryCommandHandlers: Array<Provider> = [
  CreateProductCategoryCommandHandler,
  DeleteProductCategoryCommandHandler,
  UpdateProductCategoryCommandHandler,
  DeleteManyProductCategoryCommandHandler
];

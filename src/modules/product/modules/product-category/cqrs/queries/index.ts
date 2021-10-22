import { GetAllProductCategoryQueryHandler } from './handler/get-all-product-category-query.handler';
import { GetPaginatedProductCategoryQueryHandler } from './handler/get-paginated-product-category-query.handler';
import { GetOneProductCategoryQueryHandler } from './handler/get-one-product-category-query.handler';
import { Provider } from '@nestjs/common';

export const ProductCategoryQueryHandlers:Array<Provider> = [
  GetAllProductCategoryQueryHandler,
  GetPaginatedProductCategoryQueryHandler,
  GetOneProductCategoryQueryHandler,
];

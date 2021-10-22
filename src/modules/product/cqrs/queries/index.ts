import { GetAllProductQueryHandler } from './handler/get-all-product-query.handler';
import { GetPaginatedProductQueryHandler } from './handler/get-paginated-product-query.handler';
import { GetOneProductQueryHandler } from './handler/get-one-product-query.handler';
import { Provider } from '@nestjs/common';

export const ProductQueryHandlers:Array<Provider> = [
  GetAllProductQueryHandler,
  GetPaginatedProductQueryHandler,
  GetOneProductQueryHandler,
];

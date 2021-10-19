import { GetAll__name__QueryHandler } from './handler/get-all-__name__(kebabCase)-query.handler';
import { GetPaginated__name__QueryHandler } from './handler/get-paginated-__name__(kebabCase)-query.handler';
import { GetOne__name__QueryHandler } from './handler/get-one-__name__(kebabCase)-query.handler';
import { Provider } from '@nestjs/common';

export const __name__QueryHandlers:Array<Provider> = [
  GetAll__name__QueryHandler,
  GetPaginated__name__QueryHandler,
  GetOne__name__QueryHandler,
];

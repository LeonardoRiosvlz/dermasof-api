import { GetAllOfficeQueryHandler } from './handler/get-all-office-query.handler';
import { GetPaginatedOfficeQueryHandler } from './handler/get-paginated-office-query.handler';
import { GetOneOfficeQueryHandler } from './handler/get-one-office-query.handler';
import { Provider } from '@nestjs/common';

export const OfficeQueryHandlers:Array<Provider> = [
  GetAllOfficeQueryHandler,
  GetPaginatedOfficeQueryHandler,
  GetOneOfficeQueryHandler,
];

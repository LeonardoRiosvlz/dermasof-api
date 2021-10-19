import { GetAllHabeasDataQueryHandler } from './handler/get-all-habeas-data-query.handler';
import { GetPaginatedHabeasDataQueryHandler } from './handler/get-paginated-habeas-data-query.handler';
import { GetOneHabeasDataQueryHandler } from './handler/get-one-habeas-data-query.handler';
import { Provider } from '@nestjs/common';

export const HabeasDataQueryHandlers:Array<Provider> = [
  GetAllHabeasDataQueryHandler,
  GetPaginatedHabeasDataQueryHandler,
  GetOneHabeasDataQueryHandler,
];

import { GetAllFloorQueryHandler } from './handler/get-all-floor-query.handler';
import { GetPaginatedFloorQueryHandler } from './handler/get-paginated-floor-query.handler';
import { GetOneFloorQueryHandler } from './handler/get-one-floor-query.handler';
import { Provider } from '@nestjs/common';

export const FloorQueryHandlers:Array<Provider> = [
  GetAllFloorQueryHandler,
  GetPaginatedFloorQueryHandler,
  GetOneFloorQueryHandler,
];

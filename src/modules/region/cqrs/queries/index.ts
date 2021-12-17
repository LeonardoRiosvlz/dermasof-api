import { GetAllRegionQueryHandler } from './handler/get-all-region-query.handler';
import { GetPaginatedRegionQueryHandler } from './handler/get-paginated-region-query.handler';
import { GetOneRegionQueryHandler } from './handler/get-one-region-query.handler';
import { Provider } from '@nestjs/common';

export const RegionQueryHandlers:Array<Provider> = [
  GetAllRegionQueryHandler,
  GetPaginatedRegionQueryHandler,
  GetOneRegionQueryHandler,
];

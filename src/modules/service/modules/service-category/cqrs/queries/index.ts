import { GetAllServiceCategoryQueryHandler } from './handler/get-all-service-category-query.handler';
import { GetPaginatedServiceCategoryQueryHandler } from './handler/get-paginated-service-category-query.handler';
import { GetOneServiceCategoryQueryHandler } from './handler/get-one-service-category-query.handler';
import { Provider } from '@nestjs/common';

export const ServiceCategoryQueryHandlers:Array<Provider> = [
  GetAllServiceCategoryQueryHandler,
  GetPaginatedServiceCategoryQueryHandler,
  GetOneServiceCategoryQueryHandler,
];

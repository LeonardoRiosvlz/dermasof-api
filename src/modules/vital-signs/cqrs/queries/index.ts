import { GetAllVitalSignsQueryHandler } from './handler/get-all-vital-signs-query.handler';
import { GetPaginatedVitalSignsQueryHandler } from './handler/get-paginated-vital-signs-query.handler';
import { GetOneVitalSignsQueryHandler } from './handler/get-one-vital-signs-query.handler';
import { Provider } from '@nestjs/common';

export const VitalSignsQueryHandlers:Array<Provider> = [
  GetAllVitalSignsQueryHandler,
  GetPaginatedVitalSignsQueryHandler,
  GetOneVitalSignsQueryHandler,
];

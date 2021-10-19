import { GetAllInformedConsentQueryHandler } from './handler/get-all-informed-consent-query.handler';
import { GetPaginatedInformedConsentQueryHandler } from './handler/get-paginated-informed-consent-query.handler';
import { GetOneInformedConsentQueryHandler } from './handler/get-one-informed-consent-query.handler';
import { Provider } from '@nestjs/common';

export const InformedConsentQueryHandlers:Array<Provider> = [
  GetAllInformedConsentQueryHandler,
  GetPaginatedInformedConsentQueryHandler,
  GetOneInformedConsentQueryHandler,
];

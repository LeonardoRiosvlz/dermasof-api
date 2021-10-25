import { GetAllConsultationTypeQueryHandler } from './handler/get-all-consultation-type-query.handler';
import { GetPaginatedConsultationTypeQueryHandler } from './handler/get-paginated-consultation-type-query.handler';
import { GetOneConsultationTypeQueryHandler } from './handler/get-one-consultation-type-query.handler';
import { Provider } from '@nestjs/common';

export const ConsultationTypeQueryHandlers:Array<Provider> = [
  GetAllConsultationTypeQueryHandler,
  GetPaginatedConsultationTypeQueryHandler,
  GetOneConsultationTypeQueryHandler,
];

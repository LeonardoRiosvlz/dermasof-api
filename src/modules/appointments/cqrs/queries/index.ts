import { GetAllAppointmentsQueryHandler } from './handler/get-all-appointments-query.handler';
import { GetPaginatedAppointmentsQueryHandler } from './handler/get-paginated-appointments-query.handler';
import { GetOneAppointmentsQueryHandler } from './handler/get-one-appointments-query.handler';
import { Provider } from '@nestjs/common';

export const AppointmentsQueryHandlers:Array<Provider> = [
  GetAllAppointmentsQueryHandler,
  GetPaginatedAppointmentsQueryHandler,
  GetOneAppointmentsQueryHandler,
];

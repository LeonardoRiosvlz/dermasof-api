import { GetAllProceduresQueryHandler } from './handler/get-all-procedures-query.handler';
import { GetPaginatedProceduresQueryHandler } from './handler/get-paginated-procedures-query.handler';
import { GetOneProceduresQueryHandler } from './handler/get-one-procedures-query.handler';
import { Provider } from '@nestjs/common';

export const ProceduresQueryHandlers:Array<Provider> = [
  GetAllProceduresQueryHandler,
  GetPaginatedProceduresQueryHandler,
  GetOneProceduresQueryHandler,
];

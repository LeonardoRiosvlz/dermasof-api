import { GetAllLaboratoryExamsQueryHandler } from './handler/get-all-laboratory-exams-query.handler';
import { GetPaginatedLaboratoryExamsQueryHandler } from './handler/get-paginated-laboratory-exams-query.handler';
import { GetOneLaboratoryExamsQueryHandler } from './handler/get-one-laboratory-exams-query.handler';
import { Provider } from '@nestjs/common';

export const LaboratoryExamsQueryHandlers:Array<Provider> = [
  GetAllLaboratoryExamsQueryHandler,
  GetPaginatedLaboratoryExamsQueryHandler,
  GetOneLaboratoryExamsQueryHandler,
];

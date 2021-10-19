import { GetAllPatientSafetyCheckQueryHandler } from './handler/get-all-patient-safety-check-query.handler';
import { GetPaginatedPatientSafetyCheckQueryHandler } from './handler/get-paginated-patient-safety-check-query.handler';
import { GetOnePatientSafetyCheckQueryHandler } from './handler/get-one-patient-safety-check-query.handler';
import { Provider } from '@nestjs/common';

export const PatientSafetyCheckQueryHandlers:Array<Provider> = [
  GetAllPatientSafetyCheckQueryHandler,
  GetPaginatedPatientSafetyCheckQueryHandler,
  GetOnePatientSafetyCheckQueryHandler,
];

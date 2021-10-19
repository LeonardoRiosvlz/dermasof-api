import { GetAllPatientDataSettingsQueryHandler } from './handler/get-all-patient-data-settings-query.handler';
import { GetPaginatedPatientDataSettingsQueryHandler } from './handler/get-paginated-patient-data-settings-query.handler';
import { GetOnePatientDataSettingsQueryHandler } from './handler/get-one-patient-data-settings-query.handler';
import { Provider } from '@nestjs/common';

export const PatientDataSettingsQueryHandlers:Array<Provider> = [
  GetAllPatientDataSettingsQueryHandler,
  GetPaginatedPatientDataSettingsQueryHandler,
  GetOnePatientDataSettingsQueryHandler,
];

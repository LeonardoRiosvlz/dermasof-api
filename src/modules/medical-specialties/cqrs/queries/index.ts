import { GetAllMedicalSpecialtiesQueryHandler } from './handler/get-all-medical-specialties-query.handler';
import { GetPaginatedMedicalSpecialtiesQueryHandler } from './handler/get-paginated-medical-specialties-query.handler';
import { GetOneMedicalSpecialtiesQueryHandler } from './handler/get-one-medical-specialties-query.handler';
import { Provider } from '@nestjs/common';

export const MedicalSpecialtiesQueryHandlers:Array<Provider> = [
  GetAllMedicalSpecialtiesQueryHandler,
  GetPaginatedMedicalSpecialtiesQueryHandler,
  GetOneMedicalSpecialtiesQueryHandler,
];

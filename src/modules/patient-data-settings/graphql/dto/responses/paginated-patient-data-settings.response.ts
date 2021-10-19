import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PatientDataSettingsResponse } from './patient-data-settings.response';

@ObjectType()
export class PaginatedPatientDataSettingsResponse extends PaginatedFindResultResponse(PatientDataSettingsResponse) {
}


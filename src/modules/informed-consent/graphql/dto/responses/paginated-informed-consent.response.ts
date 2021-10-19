import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { InformedConsentResponse } from './informed-consent.response';

@ObjectType()
export class PaginatedInformedConsentResponse extends PaginatedFindResultResponse(InformedConsentResponse) {
}


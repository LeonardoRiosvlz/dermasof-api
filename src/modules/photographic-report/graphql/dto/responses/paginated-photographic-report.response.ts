import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { PhotographicReportResponse } from './photographic-report.response';

@ObjectType()
export class PaginatedPhotographicReportResponse extends PaginatedFindResultResponse(PhotographicReportResponse) {
}


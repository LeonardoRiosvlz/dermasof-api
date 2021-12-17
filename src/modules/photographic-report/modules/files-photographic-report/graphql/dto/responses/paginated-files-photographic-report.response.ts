import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesPhotographicReportResponse } from './files-photographic-report.response';

@ObjectType()
export class PaginatedFilesPhotographicReportResponse extends PaginatedFindResultResponse(FilesPhotographicReportResponse) {
}


import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesResponse } from './files.response';

@ObjectType()
export class PaginatedFilesResponse extends PaginatedFindResultResponse(FilesResponse) {
}


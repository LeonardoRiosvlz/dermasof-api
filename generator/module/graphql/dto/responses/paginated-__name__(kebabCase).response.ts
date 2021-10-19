import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { __name__Response } from './__name__(kebabCase).response';

@ObjectType()
export class Paginated__name__Response extends PaginatedFindResultResponse(__name__Response) {
}


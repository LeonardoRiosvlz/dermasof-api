import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { MedicinesResponse } from './medicines.response';

@ObjectType()
export class PaginatedMedicinesResponse extends PaginatedFindResultResponse(MedicinesResponse) {
}


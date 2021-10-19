import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedMedicinesQuery extends GetPaginatedQuery<MedicinesEntity>{
  constructor(public request: GetPaginatedDto<MedicinesEntity>) {
    super(request)
  }
}

import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedVitalSignsQuery extends GetPaginatedQuery<VitalSignsEntity>{
  constructor(public request: GetPaginatedDto<VitalSignsEntity>) {
    super(request)
  }
}

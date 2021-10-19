import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedHabeasDataQuery extends GetPaginatedQuery<HabeasDataEntity>{
  constructor(public request: GetPaginatedDto<HabeasDataEntity>) {
    super(request)
  }
}

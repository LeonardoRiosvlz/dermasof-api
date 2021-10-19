import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedPathologiesQuery extends GetPaginatedQuery<PathologiesEntity>{
  constructor(public request: GetPaginatedDto<PathologiesEntity>) {
    super(request)
  }
}

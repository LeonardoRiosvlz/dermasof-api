import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedDataParameterizationQuery extends GetPaginatedQuery<DataParameterizationEntity>{
  constructor(public request: GetPaginatedDto<DataParameterizationEntity>) {
    super(request)
  }
}

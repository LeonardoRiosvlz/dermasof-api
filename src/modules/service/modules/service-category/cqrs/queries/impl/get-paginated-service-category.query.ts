import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedServiceCategoryQuery extends GetPaginatedQuery<ServiceCategoryEntity>{
  constructor(public request: GetPaginatedDto<ServiceCategoryEntity>) {
    super(request)
  }
}

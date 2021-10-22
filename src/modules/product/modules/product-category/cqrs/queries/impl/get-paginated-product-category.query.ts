import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedProductCategoryQuery extends GetPaginatedQuery<ProductCategoryEntity>{
  constructor(public request: GetPaginatedDto<ProductCategoryEntity>) {
    super(request)
  }
}

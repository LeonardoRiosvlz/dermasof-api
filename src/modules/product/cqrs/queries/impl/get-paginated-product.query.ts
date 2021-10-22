import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ProductEntity } from '../../../entities/product.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedProductQuery extends GetPaginatedQuery<ProductEntity>{
  constructor(public request: GetPaginatedDto<ProductEntity>) {
    super(request)
  }
}

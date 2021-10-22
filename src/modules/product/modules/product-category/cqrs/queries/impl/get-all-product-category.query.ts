import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllProductCategoryQuery extends GetAllQuery<ProductCategoryEntity>{
  constructor(public request: GetAllDto<ProductCategoryEntity>) {
    super(request)
  }
}

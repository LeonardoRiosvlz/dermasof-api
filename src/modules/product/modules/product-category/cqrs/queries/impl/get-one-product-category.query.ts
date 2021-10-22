import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneProductCategoryQuery extends GetOneQuery<ProductCategoryEntity>{
  constructor(public request: GetOneDto<ProductCategoryEntity>) {
    super(request)
  }
}

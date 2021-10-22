import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ProductEntity } from '../../../entities/product.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllProductQuery extends GetAllQuery<ProductEntity>{
  constructor(public request: GetAllDto<ProductEntity>) {
    super(request)
  }
}

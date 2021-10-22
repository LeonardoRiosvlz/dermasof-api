import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ProductEntity } from '../../../entities/product.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneProductQuery extends GetOneQuery<ProductEntity>{
  constructor(public request: GetOneDto<ProductEntity>) {
    super(request)
  }
}

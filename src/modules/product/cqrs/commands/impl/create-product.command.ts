import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ProductEntity } from '../../../entities/product.entity';

export class CreateProductCommand extends CreateCommand<ProductEntity> {
  constructor(public request: ProductEntity) {
    super(request);
  }
}

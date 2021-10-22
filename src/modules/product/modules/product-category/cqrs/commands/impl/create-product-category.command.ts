import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';

export class CreateProductCategoryCommand extends CreateCommand<ProductCategoryEntity> {
  constructor(public request: ProductCategoryEntity) {
    super(request);
  }
}

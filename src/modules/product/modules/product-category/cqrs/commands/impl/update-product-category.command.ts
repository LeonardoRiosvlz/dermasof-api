import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';

export class UpdateProductCategoryCommand extends UpdateCommand<ProductCategoryEntity> {
  constructor(public entityId: string, update: Partial<ProductCategoryEntity>) {
    super({entityId, update});
  }
}

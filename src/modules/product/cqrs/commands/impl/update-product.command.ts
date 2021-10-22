import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ProductEntity } from '../../../entities/product.entity';

export class UpdateProductCommand extends UpdateCommand<ProductEntity> {
  constructor(public entityId: string, update: Partial<ProductEntity>) {
    super({entityId, update});
  }
}

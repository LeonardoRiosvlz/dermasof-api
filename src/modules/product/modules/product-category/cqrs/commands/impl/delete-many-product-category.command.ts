import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ProductCategoryEntity } from '../../../entities/product-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyProductCategoryCommand extends DeleteManyCommand<ProductCategoryEntity>{
  constructor(public request: GetOneDto<ProductCategoryEntity>) {
    super(request)
  }
}

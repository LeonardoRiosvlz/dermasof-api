import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ProductEntity } from '../../../entities/product.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyProductCommand extends DeleteManyCommand<ProductEntity>{
  constructor(public request: GetOneDto<ProductEntity>) {
    super(request)
  }
}

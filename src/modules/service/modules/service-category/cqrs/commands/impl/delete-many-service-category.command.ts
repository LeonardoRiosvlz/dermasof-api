import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyServiceCategoryCommand extends DeleteManyCommand<ServiceCategoryEntity>{
  constructor(public request: GetOneDto<ServiceCategoryEntity>) {
    super(request)
  }
}

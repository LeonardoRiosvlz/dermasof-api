import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';

export class CreateServiceCategoryCommand extends CreateCommand<ServiceCategoryEntity> {
  constructor(public request: ServiceCategoryEntity) {
    super(request);
  }
}

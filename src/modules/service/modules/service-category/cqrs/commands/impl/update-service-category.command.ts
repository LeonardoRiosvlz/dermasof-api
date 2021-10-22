import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';

export class UpdateServiceCategoryCommand extends UpdateCommand<ServiceCategoryEntity> {
  constructor(public entityId: string, update: Partial<ServiceCategoryEntity>) {
    super({entityId, update});
  }
}

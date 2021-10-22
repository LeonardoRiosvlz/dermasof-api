import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { ServiceEntity } from '../../../entities/service.entity';

export class CreateServiceCommand extends CreateCommand<ServiceEntity> {
  constructor(public request: ServiceEntity) {
    super(request);
  }
}

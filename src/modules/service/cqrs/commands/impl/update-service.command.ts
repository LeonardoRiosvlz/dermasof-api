import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { ServiceEntity } from '../../../entities/service.entity';

export class UpdateServiceCommand extends UpdateCommand<ServiceEntity> {
  constructor(public entityId: string, update: Partial<ServiceEntity>) {
    super({entityId, update});
  }
}

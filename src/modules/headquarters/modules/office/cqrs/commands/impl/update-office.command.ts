import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { OfficeEntity } from '../../../entities/office.entity';

export class UpdateOfficeCommand extends UpdateCommand<OfficeEntity> {
  constructor(public entityId: string, update: Partial<OfficeEntity>) {
    super({entityId, update});
  }
}

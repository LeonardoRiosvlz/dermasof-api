import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';

export class UpdateVitalSignsCommand extends UpdateCommand<VitalSignsEntity> {
  constructor(public entityId: string, update: Partial<VitalSignsEntity>) {
    super({entityId, update});
  }
}

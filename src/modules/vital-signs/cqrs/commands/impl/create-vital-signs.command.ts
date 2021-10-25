import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';

export class CreateVitalSignsCommand extends CreateCommand<VitalSignsEntity> {
  constructor(public request: VitalSignsEntity) {
    super(request);
  }
}

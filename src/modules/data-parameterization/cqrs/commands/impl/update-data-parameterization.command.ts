import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';

export class UpdateDataParameterizationCommand extends UpdateCommand<DataParameterizationEntity> {
  constructor(public entityId: string, update: Partial<DataParameterizationEntity>) {
    super({entityId, update});
  }
}

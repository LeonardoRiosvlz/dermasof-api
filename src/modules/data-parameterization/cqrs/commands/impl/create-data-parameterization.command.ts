import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';

export class CreateDataParameterizationCommand extends CreateCommand<DataParameterizationEntity> {
  constructor(public request: DataParameterizationEntity) {
    super(request);
  }
}

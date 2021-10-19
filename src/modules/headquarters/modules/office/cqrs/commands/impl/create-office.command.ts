import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { OfficeEntity } from '../../../entities/office.entity';

export class CreateOfficeCommand extends CreateCommand<OfficeEntity> {
  constructor(public request: OfficeEntity) {
    super(request);
  }
}

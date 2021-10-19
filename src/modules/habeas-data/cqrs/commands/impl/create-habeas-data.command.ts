import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';

export class CreateHabeasDataCommand extends CreateCommand<HabeasDataEntity> {
  constructor(public request: HabeasDataEntity) {
    super(request);
  }
}

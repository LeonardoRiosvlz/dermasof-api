import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';

export class UpdateHabeasDataCommand extends UpdateCommand<HabeasDataEntity> {
  constructor(public entityId: string, update: Partial<HabeasDataEntity>) {
    super({entityId, update});
  }
}

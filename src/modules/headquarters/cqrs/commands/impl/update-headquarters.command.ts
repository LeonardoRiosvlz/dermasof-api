import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';

export class UpdateHeadquartersCommand extends UpdateCommand<HeadquartersEntity> {
  constructor(public entityId: string, update: Partial<HeadquartersEntity>) {
    super({entityId, update});
  }
}

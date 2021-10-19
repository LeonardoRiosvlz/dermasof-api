import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';

export class CreateHeadquartersCommand extends CreateCommand<HeadquartersEntity> {
  constructor(public request: HeadquartersEntity) {
    super(request);
  }
}

import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { RoleEntity } from '../../../entities/role.entity';

export class CreateRoleCommand extends CreateCommand<RoleEntity> {
  constructor(public request: RoleEntity) {
    super(request);
  }
}

import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { RoleEntity } from '../../../entities/role.entity';
import { PermitsEntity } from '../../../entities/schema/permits.schema';

type PartialRole = Partial<Omit<RoleEntity, 'permits'>> & {
  permits?: Array<Partial<PermitsEntity>>
}

// @ts-ignore
export class UpdateRoleCommand extends UpdateCommand<PartialRole> {
  constructor(public entityId: string, update: Partial<PartialRole>) {
    super({ entityId, update });
  }
}

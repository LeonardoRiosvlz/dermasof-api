import { DeleteCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete.command';

export class DeleteRoleCommand extends DeleteCommand{
  constructor(public entityId: string) {
    super(entityId)
  }
}

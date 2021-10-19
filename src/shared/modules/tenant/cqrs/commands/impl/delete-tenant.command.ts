import { DeleteCommand } from '../../../../app-cqrs/commands/impl/delete.command';

export class DeleteTenantCommand extends DeleteCommand{
  constructor(public entityId: string) {
    super(entityId)
  }
}

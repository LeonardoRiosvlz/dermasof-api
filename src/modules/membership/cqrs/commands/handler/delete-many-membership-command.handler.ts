import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyMembershipCommand } from '../impl/delete-many-membership.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@CommandHandler(DeleteManyMembershipCommand)
export class DeleteManyMembershipCommandHandler extends DeleteManyCommandHandler<MembershipEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MembershipEntityService.name)
  }

}

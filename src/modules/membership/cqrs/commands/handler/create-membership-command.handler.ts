import { CommandHandler } from '@nestjs/cqrs';

import { CreateMembershipCommand } from '../impl/create-membership.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@CommandHandler(CreateMembershipCommand)
export class CreateMembershipCommandHandler extends CreateCommandHandler<MembershipEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MembershipEntityService.name);
  }

}

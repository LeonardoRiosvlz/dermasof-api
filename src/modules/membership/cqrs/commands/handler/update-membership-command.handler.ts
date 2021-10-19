import { CommandHandler } from '@nestjs/cqrs';
import { UpdateMembershipCommand } from '../impl/update-membership.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { MembershipEntityService } from '../../../services/membership-entity.service';
import { MembershipEntity } from '../../../entities/membership.entity';

@CommandHandler(UpdateMembershipCommand)
export class UpdateMembershipCommandHandler extends UpdateCommandHandler<MembershipEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MembershipEntityService.name)
  }

}

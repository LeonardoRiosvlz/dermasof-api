import { CommandHandler } from '@nestjs/cqrs';
import { DeleteMembershipCommand } from '../impl/delete-membership.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@CommandHandler(DeleteMembershipCommand)
export class DeleteMembershipCommandHandler extends DeleteCommandHandler<MembershipEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MembershipEntityService.name)
  }
}

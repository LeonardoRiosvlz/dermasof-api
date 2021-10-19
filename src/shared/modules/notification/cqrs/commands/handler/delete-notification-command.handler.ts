import { CommandHandler } from '@nestjs/cqrs';
import { DeleteNotificationCommand } from '../impl/delete-notification.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationEntityService } from '../../../services/notification-entity.service';

@CommandHandler(DeleteNotificationCommand)
export class DeleteNotificationCommandHandler extends DeleteCommandHandler<NotificationEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, NotificationEntityService.name)
  }
}

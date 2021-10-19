import { CommandHandler } from '@nestjs/cqrs';
import { UpdateNotificationCommand } from '../impl/update-notification.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { NotificationEntityService } from '../../../services/notification-entity.service';
import { NotificationEntity } from '../../../entities/notification.entity';

@CommandHandler(UpdateNotificationCommand)
export class UpdateNotificationCommandHandler extends UpdateCommandHandler<NotificationEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, NotificationEntityService.name)
  }

}

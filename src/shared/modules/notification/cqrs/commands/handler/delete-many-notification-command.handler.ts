import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyNotificationCommand } from '../impl/delete-many-notification.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationEntityService } from '../../../services/notification-entity.service';

@CommandHandler(DeleteManyNotificationCommand)
export class DeleteManyNotificationCommandHandler extends DeleteManyCommandHandler<NotificationEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, NotificationEntityService.name)
  }

}

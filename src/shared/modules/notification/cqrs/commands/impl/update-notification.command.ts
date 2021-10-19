import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { NotificationEntity } from '../../../entities/notification.entity';

export class UpdateNotificationCommand extends UpdateCommand<NotificationEntity> {
  constructor(public entityId: string, update: Partial<NotificationEntity>) {
    super({entityId, update});
  }
}

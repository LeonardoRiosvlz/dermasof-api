import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { NotificationEntity } from '../../../entities/notification.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyNotificationCommand extends DeleteManyCommand<NotificationEntity>{
  constructor(public request: GetOneDto<NotificationEntity>) {
    super(request)
  }
}

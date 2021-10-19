import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { NotificationEntity } from '../../../entities/notification.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneNotificationQuery extends GetOneQuery<NotificationEntity>{
  constructor(public request: GetOneDto<NotificationEntity>) {
    super(request)
  }
}

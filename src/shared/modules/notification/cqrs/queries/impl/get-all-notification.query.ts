import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { NotificationEntity } from '../../../entities/notification.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllNotificationQuery extends GetAllQuery<NotificationEntity>{
  constructor(public request: GetAllDto<NotificationEntity>) {
    super(request)
  }
}

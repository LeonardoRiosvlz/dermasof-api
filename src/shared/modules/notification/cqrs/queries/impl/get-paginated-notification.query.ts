import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { NotificationEntity } from '../../../entities/notification.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedNotificationQuery extends GetPaginatedQuery<NotificationEntity>{
  constructor(public request: GetPaginatedDto<NotificationEntity>) {
    super(request)
  }
}

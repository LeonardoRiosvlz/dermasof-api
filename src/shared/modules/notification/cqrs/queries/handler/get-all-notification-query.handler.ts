import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllNotificationQuery } from '../impl/get-all-notification.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationEntityService } from '../../../services/notification-entity.service';

@QueryHandler(GetAllNotificationQuery)
export class GetAllNotificationQueryHandler extends GetAllQueryHandler<NotificationEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, NotificationEntityService.name)
  }

}

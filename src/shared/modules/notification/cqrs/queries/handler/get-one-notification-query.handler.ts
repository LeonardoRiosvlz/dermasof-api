import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneNotificationQuery } from '../impl/get-one-notification.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationEntityService } from '../../../services/notification-entity.service';

@QueryHandler(GetOneNotificationQuery)
export class GetOneNotificationQueryHandler extends GetOneQueryHandler<NotificationEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, NotificationEntityService.name)
  }
}


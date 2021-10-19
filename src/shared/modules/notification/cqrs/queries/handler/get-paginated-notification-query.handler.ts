import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedNotificationQuery } from '../impl/get-paginated-notification.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationEntityService } from '../../../services/notification-entity.service';

@QueryHandler(GetPaginatedNotificationQuery)
export class GetPaginatedNotificationQueryHandler extends GetPaginatedQueryHandler<NotificationEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, NotificationEntityService.name)
  }

}

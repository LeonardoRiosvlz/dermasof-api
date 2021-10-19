import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { NotificationEntity } from '../entities/notification.entity';
import { NotificationRepository } from '../repositories/notification.repository';


@Injectable()
export class NotificationEntityService extends BaseEntityService<NotificationEntity> {
  constructor(private readonly _notificationRepo: NotificationRepository) {
    super(_notificationRepo, NotificationEntity.name);
  }

}

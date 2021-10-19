import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { NotificationEntity } from '../entities/notification.entity';

@Injectable()
export class NotificationRepository extends BaseRepository<NotificationEntity, FilterableFieldsType<NotificationEntity>> {
  constructor(
    @Inject(NotificationEntity.name) private readonly _notificationModel: Model<NotificationEntity>,
  ) {
    super(_notificationModel, NotificationRepository.name);
  }
}

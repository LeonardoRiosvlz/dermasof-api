import { NotificationEntity } from '../entities/notification.entity';

import { Injectable } from '@nestjs/common';
import { NotificationResponse } from '../graphql/dto/responses/notification.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';

@Injectable()
export class NotificationMapper implements BaseMapper<NotificationEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = any>(dto: any): NotificationEntity {
    throw new Error('No Implementation!');
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = NotificationResponse>(dto: NotificationResponse): NotificationEntity {
    throw new Error('No Implementation!');

  }


  persistent2Dto({ toUser, ...rest }: NotificationEntity): NotificationResponse {
    return {
      ...rest,
      toUser: { id: toUser },
    };
  }

}

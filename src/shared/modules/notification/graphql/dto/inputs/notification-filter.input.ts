import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { NotificationEntity } from '../../../entities/notification.entity';
import { NotificationType } from '../../../interfaces/IAppNotificationService';

@ObjectType()
export class NotificationFilter implements IEntityFilter<NotificationEntity> {
  @FilterableField(() => String, { nullable: true }) id?: string;

  @FilterableField(() => NotificationType) type?: NotificationType;
  @FilterableField(() => Boolean) isRead?: boolean;

  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;

}

export const NotificationFilterInput = FilterType(NotificationFilter);
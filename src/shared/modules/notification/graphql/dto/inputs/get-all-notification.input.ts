import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByNotificationInput } from './order-by-notification.input';
import { NotificationFilter, NotificationFilterInput } from './notification-filter.input';

@InputType()
export class GetAllNotificationInput {
  @Field(() => NotificationFilterInput, {nullable: true} )  where?: Filter<NotificationFilter>;
  @Field(() => OrderByNotificationInput, {nullable: true} )  orderBy?: OrderByNotificationInput;
}

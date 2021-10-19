import { Field, InputType } from '@nestjs/graphql';
import { NotificationFilter,NotificationFilterInput } from './notification-filter.input';
import { OrderByNotificationInput } from './order-by-notification.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedNotificationInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => NotificationFilterInput, {nullable: true} )  where?: Filter<NotificationFilter>;
  @Field(() => OrderByNotificationInput, {nullable: true} )  orderBy?: OrderByNotificationInput;
}

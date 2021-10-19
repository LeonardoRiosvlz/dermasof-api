import { Field, InputType } from '@nestjs/graphql';
import { NotificationFilter, NotificationFilterInput } from './notification-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneNotificationInput {
  @Field(() => NotificationFilterInput, {nullable: true} )  where?: Filter<NotificationFilter>;
}

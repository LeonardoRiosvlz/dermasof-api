import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByUserPositionInput } from './order-by-user-position.input';
import { UserPositionFilter, UserPositionFilterInput } from './user-position-filter.input';

@InputType()
export class GetAllUserPositionInput {
  @Field(() => UserPositionFilterInput, {nullable: true} )  where?: Filter<UserPositionFilter>;
  @Field(() => OrderByUserPositionInput, {nullable: true} )  orderBy?: OrderByUserPositionInput;
}

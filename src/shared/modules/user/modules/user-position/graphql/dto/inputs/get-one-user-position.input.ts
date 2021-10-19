import { Field, InputType } from '@nestjs/graphql';
import { UserPositionFilter, UserPositionFilterInput } from './user-position-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneUserPositionInput {
  @Field(() => UserPositionFilterInput, {nullable: true} )  where?: Filter<UserPositionFilter>;
}

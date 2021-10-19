import { Field, InputType } from '@nestjs/graphql';
import { UserAreaFilter, UserAreaFilterInput } from './user-area-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneUserAreaInput {
  @Field(() => UserAreaFilterInput, {nullable: true} )  where?: Filter<UserAreaFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { UserAreaFilter, UserAreaFilterInput } from './user-area-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyUserAreaInput {
  @Field(() => UserAreaFilterInput, {nullable: true} )  where?: Filter<UserAreaFilter>;
}

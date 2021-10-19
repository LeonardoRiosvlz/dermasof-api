import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByUserAreaInput } from './order-by-user-area.input';
import { UserAreaFilter, UserAreaFilterInput } from './user-area-filter.input';

@InputType()
export class GetAllUserAreaInput {
  @Field(() => UserAreaFilterInput, {nullable: true} )  where?: Filter<UserAreaFilter>;
  @Field(() => OrderByUserAreaInput, {nullable: true} )  orderBy?: OrderByUserAreaInput;
}

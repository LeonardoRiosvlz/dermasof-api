import { Field, InputType, ID } from '@nestjs/graphql';
import { FloorFilter, FloorFilterInput } from './floor-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFloorInput {
  @Field(() => FloorFilterInput, {nullable: true} )  where?: Filter<FloorFilter>;
}

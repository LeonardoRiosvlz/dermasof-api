import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFloorInput } from './order-by-floor.input';
import { FloorFilter, FloorFilterInput } from './floor-filter.input';

@InputType()
export class GetAllFloorInput {
  @Field(() => FloorFilterInput, {nullable: true} )  where?: Filter<FloorFilter>;
  @Field(() => OrderByFloorInput, {nullable: true} )  orderBy?: OrderByFloorInput;
}

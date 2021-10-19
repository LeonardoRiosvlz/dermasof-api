import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPathologiesInput } from './order-by-pathologies.input';
import { PathologiesFilter, PathologiesFilterInput } from './pathologies-filter.input';

@InputType()
export class GetAllPathologiesInput {
  @Field(() => PathologiesFilterInput, {nullable: true} )  where?: Filter<PathologiesFilter>;
  @Field(() => OrderByPathologiesInput, {nullable: true} )  orderBy?: OrderByPathologiesInput;
}

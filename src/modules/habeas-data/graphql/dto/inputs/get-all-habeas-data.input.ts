import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByHabeasDataInput } from './order-by-habeas-data.input';
import { HabeasDataFilter, HabeasDataFilterInput } from './habeas-data-filter.input';

@InputType()
export class GetAllHabeasDataInput {
  @Field(() => HabeasDataFilterInput, {nullable: true} )  where?: Filter<HabeasDataFilter>;
  @Field(() => OrderByHabeasDataInput, {nullable: true} )  orderBy?: OrderByHabeasDataInput;
}

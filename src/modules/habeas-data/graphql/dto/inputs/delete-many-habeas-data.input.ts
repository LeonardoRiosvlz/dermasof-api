import { Field, InputType, ID } from '@nestjs/graphql';
import { HabeasDataFilter, HabeasDataFilterInput } from './habeas-data-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyHabeasDataInput {
  @Field(() => HabeasDataFilterInput, {nullable: true} )  where?: Filter<HabeasDataFilter>;
}

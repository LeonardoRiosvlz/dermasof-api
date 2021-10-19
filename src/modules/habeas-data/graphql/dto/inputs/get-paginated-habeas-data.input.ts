import { Field, InputType } from '@nestjs/graphql';
import { HabeasDataFilter,HabeasDataFilterInput } from './habeas-data-filter.input';
import { OrderByHabeasDataInput } from './order-by-habeas-data.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedHabeasDataInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => HabeasDataFilterInput, {nullable: true} )  where?: Filter<HabeasDataFilter>;
  @Field(() => OrderByHabeasDataInput, {nullable: true} )  orderBy?: OrderByHabeasDataInput;
}

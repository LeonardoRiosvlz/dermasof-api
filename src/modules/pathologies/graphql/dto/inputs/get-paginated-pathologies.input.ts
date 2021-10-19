import { Field, InputType } from '@nestjs/graphql';
import { PathologiesFilter,PathologiesFilterInput } from './pathologies-filter.input';
import { OrderByPathologiesInput } from './order-by-pathologies.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPathologiesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PathologiesFilterInput, {nullable: true} )  where?: Filter<PathologiesFilter>;
  @Field(() => OrderByPathologiesInput, {nullable: true} )  orderBy?: OrderByPathologiesInput;
}

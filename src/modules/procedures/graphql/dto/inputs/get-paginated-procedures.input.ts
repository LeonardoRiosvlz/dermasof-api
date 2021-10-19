import { Field, InputType } from '@nestjs/graphql';
import { ProceduresFilter,ProceduresFilterInput } from './procedures-filter.input';
import { OrderByProceduresInput } from './order-by-procedures.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedProceduresInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ProceduresFilterInput, {nullable: true} )  where?: Filter<ProceduresFilter>;
  @Field(() => OrderByProceduresInput, {nullable: true} )  orderBy?: OrderByProceduresInput;
}

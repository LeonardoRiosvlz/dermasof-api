import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByProceduresInput } from './order-by-procedures.input';
import { ProceduresFilter, ProceduresFilterInput } from './procedures-filter.input';

@InputType()
export class GetAllProceduresInput {
  @Field(() => ProceduresFilterInput, {nullable: true} )  where?: Filter<ProceduresFilter>;
  @Field(() => OrderByProceduresInput, {nullable: true} )  orderBy?: OrderByProceduresInput;
}

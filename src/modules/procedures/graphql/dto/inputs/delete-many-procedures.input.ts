import { Field, InputType, ID } from '@nestjs/graphql';
import { ProceduresFilter, ProceduresFilterInput } from './procedures-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyProceduresInput {
  @Field(() => ProceduresFilterInput, {nullable: true} )  where?: Filter<ProceduresFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { ClinicHistoryProcedureFilter, ClinicHistoryProcedureFilterInput } from './clinic-history-procedure-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClinicHistoryProcedureInput {
  @Field(() => ClinicHistoryProcedureFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryProcedureFilter>;
}

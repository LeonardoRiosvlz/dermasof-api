import { Field, InputType } from '@nestjs/graphql';
import { ClinicHistoryProcedureFilter, ClinicHistoryProcedureFilterInput } from './clinic-history-procedure-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneClinicHistoryProcedureInput {
  @Field(() => ClinicHistoryProcedureFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryProcedureFilter>;
}

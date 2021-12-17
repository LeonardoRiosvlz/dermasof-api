import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClinicHistoryProcedureInput } from './order-by-clinic-history-procedure.input';
import { ClinicHistoryProcedureFilter, ClinicHistoryProcedureFilterInput } from './clinic-history-procedure-filter.input';

@InputType()
export class GetAllClinicHistoryProcedureInput {
  @Field(() => ClinicHistoryProcedureFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryProcedureFilter>;
  @Field(() => OrderByClinicHistoryProcedureInput, {nullable: true} )  orderBy?: OrderByClinicHistoryProcedureInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { ClinicHistoryProcedureFilter,ClinicHistoryProcedureFilterInput } from './clinic-history-procedure-filter.input';
import { OrderByClinicHistoryProcedureInput } from './order-by-clinic-history-procedure.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClinicHistoryProcedureInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClinicHistoryProcedureFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryProcedureFilter>;
  @Field(() => OrderByClinicHistoryProcedureInput, {nullable: true} )  orderBy?: OrderByClinicHistoryProcedureInput;
}

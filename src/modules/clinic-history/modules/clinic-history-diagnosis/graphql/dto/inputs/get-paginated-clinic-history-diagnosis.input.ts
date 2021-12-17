import { Field, InputType } from '@nestjs/graphql';
import { ClinicHistoryDiagnosisFilter,ClinicHistoryDiagnosisFilterInput } from './clinic-history-diagnosis-filter.input';
import { OrderByClinicHistoryDiagnosisInput } from './order-by-clinic-history-diagnosis.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClinicHistoryDiagnosisInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClinicHistoryDiagnosisFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryDiagnosisFilter>;
  @Field(() => OrderByClinicHistoryDiagnosisInput, {nullable: true} )  orderBy?: OrderByClinicHistoryDiagnosisInput;
}

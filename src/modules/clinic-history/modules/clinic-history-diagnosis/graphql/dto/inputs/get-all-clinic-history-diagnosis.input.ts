import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClinicHistoryDiagnosisInput } from './order-by-clinic-history-diagnosis.input';
import { ClinicHistoryDiagnosisFilter, ClinicHistoryDiagnosisFilterInput } from './clinic-history-diagnosis-filter.input';

@InputType()
export class GetAllClinicHistoryDiagnosisInput {
  @Field(() => ClinicHistoryDiagnosisFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryDiagnosisFilter>;
  @Field(() => OrderByClinicHistoryDiagnosisInput, {nullable: true} )  orderBy?: OrderByClinicHistoryDiagnosisInput;
}

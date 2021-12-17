import { Field, InputType, ID } from '@nestjs/graphql';
import { ClinicHistoryDiagnosisFilter, ClinicHistoryDiagnosisFilterInput } from './clinic-history-diagnosis-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClinicHistoryDiagnosisInput {
  @Field(() => ClinicHistoryDiagnosisFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryDiagnosisFilter>;
}

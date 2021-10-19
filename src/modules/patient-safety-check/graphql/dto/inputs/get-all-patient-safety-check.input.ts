import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPatientSafetyCheckInput } from './order-by-patient-safety-check.input';
import { PatientSafetyCheckFilter, PatientSafetyCheckFilterInput } from './patient-safety-check-filter.input';

@InputType()
export class GetAllPatientSafetyCheckInput {
  @Field(() => PatientSafetyCheckFilterInput, {nullable: true} )  where?: Filter<PatientSafetyCheckFilter>;
  @Field(() => OrderByPatientSafetyCheckInput, {nullable: true} )  orderBy?: OrderByPatientSafetyCheckInput;
}

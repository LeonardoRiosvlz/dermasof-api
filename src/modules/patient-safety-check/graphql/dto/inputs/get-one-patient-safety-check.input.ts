import { Field, InputType } from '@nestjs/graphql';
import { PatientSafetyCheckFilter, PatientSafetyCheckFilterInput } from './patient-safety-check-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePatientSafetyCheckInput {
  @Field(() => PatientSafetyCheckFilterInput, {nullable: true} )  where?: Filter<PatientSafetyCheckFilter>;
}

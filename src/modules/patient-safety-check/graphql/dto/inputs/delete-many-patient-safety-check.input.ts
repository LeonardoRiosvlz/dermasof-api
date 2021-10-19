import { Field, InputType, ID } from '@nestjs/graphql';
import { PatientSafetyCheckFilter, PatientSafetyCheckFilterInput } from './patient-safety-check-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyPatientSafetyCheckInput {
  @Field(() => PatientSafetyCheckFilterInput, {nullable: true} )  where?: Filter<PatientSafetyCheckFilter>;
}

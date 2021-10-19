import { Field, InputType } from '@nestjs/graphql';
import { PatientDataSettingsFilter, PatientDataSettingsFilterInput } from './patient-data-settings-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePatientDataSettingsInput {
  @Field(() => PatientDataSettingsFilterInput, {nullable: true} )  where?: Filter<PatientDataSettingsFilter>;
}

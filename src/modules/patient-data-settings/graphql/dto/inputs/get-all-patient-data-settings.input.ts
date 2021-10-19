import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPatientDataSettingsInput } from './order-by-patient-data-settings.input';
import { PatientDataSettingsFilter, PatientDataSettingsFilterInput } from './patient-data-settings-filter.input';

@InputType()
export class GetAllPatientDataSettingsInput {
  @Field(() => PatientDataSettingsFilterInput, {nullable: true} )  where?: Filter<PatientDataSettingsFilter>;
  @Field(() => OrderByPatientDataSettingsInput, {nullable: true} )  orderBy?: OrderByPatientDataSettingsInput;
}

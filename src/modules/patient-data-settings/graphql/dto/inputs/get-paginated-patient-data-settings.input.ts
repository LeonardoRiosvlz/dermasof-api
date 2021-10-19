import { Field, InputType } from '@nestjs/graphql';
import { PatientDataSettingsFilter,PatientDataSettingsFilterInput } from './patient-data-settings-filter.input';
import { OrderByPatientDataSettingsInput } from './order-by-patient-data-settings.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPatientDataSettingsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PatientDataSettingsFilterInput, {nullable: true} )  where?: Filter<PatientDataSettingsFilter>;
  @Field(() => OrderByPatientDataSettingsInput, {nullable: true} )  orderBy?: OrderByPatientDataSettingsInput;
}

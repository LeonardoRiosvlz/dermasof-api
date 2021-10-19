import { Field, InputType } from '@nestjs/graphql';
import { PatientSafetyCheckFilter,PatientSafetyCheckFilterInput } from './patient-safety-check-filter.input';
import { OrderByPatientSafetyCheckInput } from './order-by-patient-safety-check.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPatientSafetyCheckInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PatientSafetyCheckFilterInput, {nullable: true} )  where?: Filter<PatientSafetyCheckFilter>;
  @Field(() => OrderByPatientSafetyCheckInput, {nullable: true} )  orderBy?: OrderByPatientSafetyCheckInput;
}

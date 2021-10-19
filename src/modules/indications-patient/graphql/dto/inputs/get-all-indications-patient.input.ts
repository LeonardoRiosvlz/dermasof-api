import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByIndicationsPatientInput } from './order-by-indications-patient.input';
import { IndicationsPatientFilter, IndicationsPatientFilterInput } from './indications-patient-filter.input';

@InputType()
export class GetAllIndicationsPatientInput {
  @Field(() => IndicationsPatientFilterInput, {nullable: true} )  where?: Filter<IndicationsPatientFilter>;
  @Field(() => OrderByIndicationsPatientInput, {nullable: true} )  orderBy?: OrderByIndicationsPatientInput;
}

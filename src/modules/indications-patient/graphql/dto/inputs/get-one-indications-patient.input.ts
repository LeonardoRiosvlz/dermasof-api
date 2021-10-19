import { Field, InputType } from '@nestjs/graphql';
import { IndicationsPatientFilter, IndicationsPatientFilterInput } from './indications-patient-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneIndicationsPatientInput {
  @Field(() => IndicationsPatientFilterInput, {nullable: true} )  where?: Filter<IndicationsPatientFilter>;
}

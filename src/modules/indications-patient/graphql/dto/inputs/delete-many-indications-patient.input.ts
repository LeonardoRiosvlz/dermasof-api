import { Field, InputType, ID } from '@nestjs/graphql';
import { IndicationsPatientFilter, IndicationsPatientFilterInput } from './indications-patient-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyIndicationsPatientInput {
  @Field(() => IndicationsPatientFilterInput, {nullable: true} )  where?: Filter<IndicationsPatientFilter>;
}

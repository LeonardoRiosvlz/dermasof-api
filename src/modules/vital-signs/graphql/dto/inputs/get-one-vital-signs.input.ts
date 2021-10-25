import { Field, InputType } from '@nestjs/graphql';
import { VitalSignsFilter, VitalSignsFilterInput } from './vital-signs-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneVitalSignsInput {
  @Field(() => VitalSignsFilterInput, {nullable: true} )  where?: Filter<VitalSignsFilter>;
}

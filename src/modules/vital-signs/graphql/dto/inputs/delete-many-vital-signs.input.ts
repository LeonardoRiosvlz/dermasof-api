import { Field, InputType, ID } from '@nestjs/graphql';
import { VitalSignsFilter, VitalSignsFilterInput } from './vital-signs-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyVitalSignsInput {
  @Field(() => VitalSignsFilterInput, {nullable: true} )  where?: Filter<VitalSignsFilter>;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByVitalSignsInput } from './order-by-vital-signs.input';
import { VitalSignsFilter, VitalSignsFilterInput } from './vital-signs-filter.input';

@InputType()
export class GetAllVitalSignsInput {
  @Field(() => VitalSignsFilterInput, {nullable: true} )  where?: Filter<VitalSignsFilter>;
  @Field(() => OrderByVitalSignsInput, {nullable: true} )  orderBy?: OrderByVitalSignsInput;
}

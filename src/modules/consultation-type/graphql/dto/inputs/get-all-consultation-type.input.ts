import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByConsultationTypeInput } from './order-by-consultation-type.input';
import { ConsultationTypeFilter, ConsultationTypeFilterInput } from './consultation-type-filter.input';

@InputType()
export class GetAllConsultationTypeInput {
  @Field(() => ConsultationTypeFilterInput, {nullable: true} )  where?: Filter<ConsultationTypeFilter>;
  @Field(() => OrderByConsultationTypeInput, {nullable: true} )  orderBy?: OrderByConsultationTypeInput;
}

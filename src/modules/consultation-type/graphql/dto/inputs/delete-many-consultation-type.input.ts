import { Field, InputType, ID } from '@nestjs/graphql';
import { ConsultationTypeFilter, ConsultationTypeFilterInput } from './consultation-type-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyConsultationTypeInput {
  @Field(() => ConsultationTypeFilterInput, {nullable: true} )  where?: Filter<ConsultationTypeFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { ClinicalHistoryIndicationsFilter, ClinicalHistoryIndicationsFilterInput } from './clinical-history-indications-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClinicalHistoryIndicationsInput {
  @Field(() => ClinicalHistoryIndicationsFilterInput, {nullable: true} )  where?: Filter<ClinicalHistoryIndicationsFilter>;
}

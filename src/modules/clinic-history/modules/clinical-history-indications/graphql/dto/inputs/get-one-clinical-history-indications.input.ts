import { Field, InputType } from '@nestjs/graphql';
import { ClinicalHistoryIndicationsFilter, ClinicalHistoryIndicationsFilterInput } from './clinical-history-indications-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneClinicalHistoryIndicationsInput {
  @Field(() => ClinicalHistoryIndicationsFilterInput, {nullable: true} )  where?: Filter<ClinicalHistoryIndicationsFilter>;
}

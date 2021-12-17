import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClinicalHistoryIndicationsInput } from './order-by-clinical-history-indications.input';
import { ClinicalHistoryIndicationsFilter, ClinicalHistoryIndicationsFilterInput } from './clinical-history-indications-filter.input';

@InputType()
export class GetAllClinicalHistoryIndicationsInput {
  @Field(() => ClinicalHistoryIndicationsFilterInput, {nullable: true} )  where?: Filter<ClinicalHistoryIndicationsFilter>;
  @Field(() => OrderByClinicalHistoryIndicationsInput, {nullable: true} )  orderBy?: OrderByClinicalHistoryIndicationsInput;
}

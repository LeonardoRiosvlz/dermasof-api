import { Field, InputType } from '@nestjs/graphql';
import { ClinicalHistoryIndicationsFilter,ClinicalHistoryIndicationsFilterInput } from './clinical-history-indications-filter.input';
import { OrderByClinicalHistoryIndicationsInput } from './order-by-clinical-history-indications.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClinicalHistoryIndicationsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClinicalHistoryIndicationsFilterInput, {nullable: true} )  where?: Filter<ClinicalHistoryIndicationsFilter>;
  @Field(() => OrderByClinicalHistoryIndicationsInput, {nullable: true} )  orderBy?: OrderByClinicalHistoryIndicationsInput;
}

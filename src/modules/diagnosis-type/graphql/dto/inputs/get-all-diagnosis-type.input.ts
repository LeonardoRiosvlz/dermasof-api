import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDiagnosisTypeInput } from './order-by-diagnosis-type.input';
import { DiagnosisTypeFilter, DiagnosisTypeFilterInput } from './diagnosis-type-filter.input';

@InputType()
export class GetAllDiagnosisTypeInput {
  @Field(() => DiagnosisTypeFilterInput, {nullable: true} )  where?: Filter<DiagnosisTypeFilter>;
  @Field(() => OrderByDiagnosisTypeInput, {nullable: true} )  orderBy?: OrderByDiagnosisTypeInput;
}

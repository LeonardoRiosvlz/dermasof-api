import { Field, InputType } from '@nestjs/graphql';
import { DiagnosisTypeFilter,DiagnosisTypeFilterInput } from './diagnosis-type-filter.input';
import { OrderByDiagnosisTypeInput } from './order-by-diagnosis-type.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDiagnosisTypeInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DiagnosisTypeFilterInput, {nullable: true} )  where?: Filter<DiagnosisTypeFilter>;
  @Field(() => OrderByDiagnosisTypeInput, {nullable: true} )  orderBy?: OrderByDiagnosisTypeInput;
}

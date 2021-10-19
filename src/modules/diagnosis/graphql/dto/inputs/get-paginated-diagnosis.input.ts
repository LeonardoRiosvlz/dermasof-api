import { Field, InputType } from '@nestjs/graphql';
import { DiagnosisFilter,DiagnosisFilterInput } from './diagnosis-filter.input';
import { OrderByDiagnosisInput } from './order-by-diagnosis.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDiagnosisInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DiagnosisFilterInput, {nullable: true} )  where?: Filter<DiagnosisFilter>;
  @Field(() => OrderByDiagnosisInput, {nullable: true} )  orderBy?: OrderByDiagnosisInput;
}

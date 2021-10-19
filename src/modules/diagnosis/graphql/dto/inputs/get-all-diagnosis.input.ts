import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDiagnosisInput } from './order-by-diagnosis.input';
import { DiagnosisFilter, DiagnosisFilterInput } from './diagnosis-filter.input';

@InputType()
export class GetAllDiagnosisInput {
  @Field(() => DiagnosisFilterInput, {nullable: true} )  where?: Filter<DiagnosisFilter>;
  @Field(() => OrderByDiagnosisInput, {nullable: true} )  orderBy?: OrderByDiagnosisInput;
}

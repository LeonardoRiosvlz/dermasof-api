import { Field, InputType } from '@nestjs/graphql';
import { DiagnosisFilter, DiagnosisFilterInput } from './diagnosis-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneDiagnosisInput {
  @Field(() => DiagnosisFilterInput, {nullable: true} )  where?: Filter<DiagnosisFilter>;
}

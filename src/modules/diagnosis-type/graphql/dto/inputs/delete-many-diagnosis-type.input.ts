import { Field, InputType, ID } from '@nestjs/graphql';
import { DiagnosisTypeFilter, DiagnosisTypeFilterInput } from './diagnosis-type-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDiagnosisTypeInput {
  @Field(() => DiagnosisTypeFilterInput, {nullable: true} )  where?: Filter<DiagnosisTypeFilter>;
}

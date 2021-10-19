import { Field, InputType } from '@nestjs/graphql';
import { LaboratoryExamsFilter, LaboratoryExamsFilterInput } from './laboratory-exams-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneLaboratoryExamsInput {
  @Field(() => LaboratoryExamsFilterInput, {nullable: true} )  where?: Filter<LaboratoryExamsFilter>;
}

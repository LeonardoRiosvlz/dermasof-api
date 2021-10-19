import { Field, InputType, ID } from '@nestjs/graphql';
import { LaboratoryExamsFilter, LaboratoryExamsFilterInput } from './laboratory-exams-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyLaboratoryExamsInput {
  @Field(() => LaboratoryExamsFilterInput, {nullable: true} )  where?: Filter<LaboratoryExamsFilter>;
}

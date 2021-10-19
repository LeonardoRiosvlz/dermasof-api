import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByLaboratoryExamsInput } from './order-by-laboratory-exams.input';
import { LaboratoryExamsFilter, LaboratoryExamsFilterInput } from './laboratory-exams-filter.input';

@InputType()
export class GetAllLaboratoryExamsInput {
  @Field(() => LaboratoryExamsFilterInput, {nullable: true} )  where?: Filter<LaboratoryExamsFilter>;
  @Field(() => OrderByLaboratoryExamsInput, {nullable: true} )  orderBy?: OrderByLaboratoryExamsInput;
}

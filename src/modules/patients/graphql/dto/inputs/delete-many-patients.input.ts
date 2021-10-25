import { Field, InputType, ID } from '@nestjs/graphql';
import { PatientsFilter, PatientsFilterInput } from './patients-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyPatientsInput {
  @Field(() => PatientsFilterInput, {nullable: true} )  where?: Filter<PatientsFilter>;
}

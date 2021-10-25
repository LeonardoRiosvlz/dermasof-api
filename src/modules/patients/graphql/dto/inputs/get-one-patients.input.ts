import { Field, InputType } from '@nestjs/graphql';
import { PatientsFilter, PatientsFilterInput } from './patients-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePatientsInput {
  @Field(() => PatientsFilterInput, {nullable: true} )  where?: Filter<PatientsFilter>;
}

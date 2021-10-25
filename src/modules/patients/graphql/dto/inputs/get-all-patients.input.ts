import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPatientsInput } from './order-by-patients.input';
import { PatientsFilter, PatientsFilterInput } from './patients-filter.input';

@InputType()
export class GetAllPatientsInput {
  @Field(() => PatientsFilterInput, {nullable: true} )  where?: Filter<PatientsFilter>;
  @Field(() => OrderByPatientsInput, {nullable: true} )  orderBy?: OrderByPatientsInput;
}

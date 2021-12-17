import { Field, InputType } from '@nestjs/graphql';
import { AppointmentsFilter, AppointmentsFilterInput } from './appointments-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneAppointmentsInput {
  @Field(() => AppointmentsFilterInput, {nullable: true} )  where?: Filter<AppointmentsFilter>;
}

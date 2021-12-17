import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByAppointmentsInput } from './order-by-appointments.input';
import { AppointmentsFilter, AppointmentsFilterInput } from './appointments-filter.input';

@InputType()
export class GetAllAppointmentsInput {
  @Field(() => AppointmentsFilterInput, {nullable: true} )  where?: Filter<AppointmentsFilter>;
  @Field(() => OrderByAppointmentsInput, {nullable: true} )  orderBy?: OrderByAppointmentsInput;
}

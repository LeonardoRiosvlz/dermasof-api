import { Field, InputType } from '@nestjs/graphql';
import { AppointmentsFilter,AppointmentsFilterInput } from './appointments-filter.input';
import { OrderByAppointmentsInput } from './order-by-appointments.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedAppointmentsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => AppointmentsFilterInput, {nullable: true} )  where?: Filter<AppointmentsFilter>;
  @Field(() => OrderByAppointmentsInput, {nullable: true} )  orderBy?: OrderByAppointmentsInput;
}

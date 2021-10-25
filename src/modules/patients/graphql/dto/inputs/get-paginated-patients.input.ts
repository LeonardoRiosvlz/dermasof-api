import { Field, InputType } from '@nestjs/graphql';
import { PatientsFilter,PatientsFilterInput } from './patients-filter.input';
import { OrderByPatientsInput } from './order-by-patients.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPatientsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PatientsFilterInput, {nullable: true} )  where?: Filter<PatientsFilter>;
  @Field(() => OrderByPatientsInput, {nullable: true} )  orderBy?: OrderByPatientsInput;
}

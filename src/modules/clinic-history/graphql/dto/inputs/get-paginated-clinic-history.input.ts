import { Field, InputType } from '@nestjs/graphql';
import { ClinicHistoryFilter,ClinicHistoryFilterInput } from './clinic-history-filter.input';
import { OrderByClinicHistoryInput } from './order-by-clinic-history.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClinicHistoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClinicHistoryFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryFilter>;
  @Field(() => OrderByClinicHistoryInput, {nullable: true} )  orderBy?: OrderByClinicHistoryInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClinicHistoryInput } from './order-by-clinic-history.input';
import { ClinicHistoryFilter, ClinicHistoryFilterInput } from './clinic-history-filter.input';

@InputType()
export class GetAllClinicHistoryInput {
  @Field(() => ClinicHistoryFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryFilter>;
  @Field(() => OrderByClinicHistoryInput, {nullable: true} )  orderBy?: OrderByClinicHistoryInput;
}

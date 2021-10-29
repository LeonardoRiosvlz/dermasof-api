import { Field, InputType } from '@nestjs/graphql';
import { ClinicHistoryFilter, ClinicHistoryFilterInput } from './clinic-history-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneClinicHistoryInput {
  @Field(() => ClinicHistoryFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryFilter>;
}

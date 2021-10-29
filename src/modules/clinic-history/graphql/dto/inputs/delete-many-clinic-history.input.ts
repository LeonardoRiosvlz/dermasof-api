import { Field, InputType, ID } from '@nestjs/graphql';
import { ClinicHistoryFilter, ClinicHistoryFilterInput } from './clinic-history-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClinicHistoryInput {
  @Field(() => ClinicHistoryFilterInput, {nullable: true} )  where?: Filter<ClinicHistoryFilter>;
}

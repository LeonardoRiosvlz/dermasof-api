import { Field, InputType, ID } from '@nestjs/graphql';
import { RegionFilter, RegionFilterInput } from './region-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyRegionInput {
  @Field(() => RegionFilterInput, {nullable: true} )  where?: Filter<RegionFilter>;
}

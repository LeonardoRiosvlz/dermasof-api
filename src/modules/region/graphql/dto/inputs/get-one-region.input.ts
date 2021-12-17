import { Field, InputType } from '@nestjs/graphql';
import { RegionFilter, RegionFilterInput } from './region-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneRegionInput {
  @Field(() => RegionFilterInput, {nullable: true} )  where?: Filter<RegionFilter>;
}

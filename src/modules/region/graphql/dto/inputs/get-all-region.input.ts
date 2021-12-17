import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByRegionInput } from './order-by-region.input';
import { RegionFilter, RegionFilterInput } from './region-filter.input';

@InputType()
export class GetAllRegionInput {
  @Field(() => RegionFilterInput, {nullable: true} )  where?: Filter<RegionFilter>;
  @Field(() => OrderByRegionInput, {nullable: true} )  orderBy?: OrderByRegionInput;
}

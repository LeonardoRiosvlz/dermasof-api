import { Field, InputType } from '@nestjs/graphql';
import { RegionFilter,RegionFilterInput } from './region-filter.input';
import { OrderByRegionInput } from './order-by-region.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedRegionInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => RegionFilterInput, {nullable: true} )  where?: Filter<RegionFilter>;
  @Field(() => OrderByRegionInput, {nullable: true} )  orderBy?: OrderByRegionInput;
}

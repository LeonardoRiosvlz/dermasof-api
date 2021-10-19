import { Field, InputType } from '@nestjs/graphql';
import { FloorFilter,FloorFilterInput } from './floor-filter.input';
import { OrderByFloorInput } from './order-by-floor.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFloorInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FloorFilterInput, {nullable: true} )  where?: Filter<FloorFilter>;
  @Field(() => OrderByFloorInput, {nullable: true} )  orderBy?: OrderByFloorInput;
}

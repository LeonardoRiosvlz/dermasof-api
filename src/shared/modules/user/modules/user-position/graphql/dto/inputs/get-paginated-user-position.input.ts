import { Field, InputType } from '@nestjs/graphql';
import { UserPositionFilter,UserPositionFilterInput } from './user-position-filter.input';
import { OrderByUserPositionInput } from './order-by-user-position.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedUserPositionInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => UserPositionFilterInput, {nullable: true} )  where?: Filter<UserPositionFilter>;
  @Field(() => OrderByUserPositionInput, {nullable: true} )  orderBy?: OrderByUserPositionInput;
}

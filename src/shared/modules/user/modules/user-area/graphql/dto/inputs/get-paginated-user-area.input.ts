import { Field, InputType } from '@nestjs/graphql';
import { UserAreaFilter,UserAreaFilterInput } from './user-area-filter.input';
import { OrderByUserAreaInput } from './order-by-user-area.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedUserAreaInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => UserAreaFilterInput, {nullable: true} )  where?: Filter<UserAreaFilter>;
  @Field(() => OrderByUserAreaInput, {nullable: true} )  orderBy?: OrderByUserAreaInput;
}

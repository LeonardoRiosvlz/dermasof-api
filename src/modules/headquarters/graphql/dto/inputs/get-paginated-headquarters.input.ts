import { Field, InputType } from '@nestjs/graphql';
import { HeadquartersFilter,HeadquartersFilterInput } from './headquarters-filter.input';
import { OrderByHeadquartersInput } from './order-by-headquarters.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedHeadquartersInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => HeadquartersFilterInput, {nullable: true} )  where?: Filter<HeadquartersFilter>;
  @Field(() => OrderByHeadquartersInput, {nullable: true} )  orderBy?: OrderByHeadquartersInput;
}

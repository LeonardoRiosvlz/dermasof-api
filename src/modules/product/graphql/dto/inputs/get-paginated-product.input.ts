import { Field, InputType } from '@nestjs/graphql';
import { ProductFilter,ProductFilterInput } from './product-filter.input';
import { OrderByProductInput } from './order-by-product.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedProductInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ProductFilterInput, {nullable: true} )  where?: Filter<ProductFilter>;
  @Field(() => OrderByProductInput, {nullable: true} )  orderBy?: OrderByProductInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByProductInput } from './order-by-product.input';
import { ProductFilter, ProductFilterInput } from './product-filter.input';

@InputType()
export class GetAllProductInput {
  @Field(() => ProductFilterInput, {nullable: true} )  where?: Filter<ProductFilter>;
  @Field(() => OrderByProductInput, {nullable: true} )  orderBy?: OrderByProductInput;
}

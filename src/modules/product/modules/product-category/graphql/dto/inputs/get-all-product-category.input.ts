import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByProductCategoryInput } from './order-by-product-category.input';
import { ProductCategoryFilter, ProductCategoryFilterInput } from './product-category-filter.input';

@InputType()
export class GetAllProductCategoryInput {
  @Field(() => ProductCategoryFilterInput, {nullable: true} )  where?: Filter<ProductCategoryFilter>;
  @Field(() => OrderByProductCategoryInput, {nullable: true} )  orderBy?: OrderByProductCategoryInput;
}

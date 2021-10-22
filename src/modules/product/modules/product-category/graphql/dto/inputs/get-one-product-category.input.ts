import { Field, InputType } from '@nestjs/graphql';
import { ProductCategoryFilter, ProductCategoryFilterInput } from './product-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneProductCategoryInput {
  @Field(() => ProductCategoryFilterInput, {nullable: true} )  where?: Filter<ProductCategoryFilter>;
}

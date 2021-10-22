import { Field, InputType, ID } from '@nestjs/graphql';
import { ProductCategoryFilter, ProductCategoryFilterInput } from './product-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyProductCategoryInput {
  @Field(() => ProductCategoryFilterInput, {nullable: true} )  where?: Filter<ProductCategoryFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { ProductFilter, ProductFilterInput } from './product-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyProductInput {
  @Field(() => ProductFilterInput, {nullable: true} )  where?: Filter<ProductFilter>;
}

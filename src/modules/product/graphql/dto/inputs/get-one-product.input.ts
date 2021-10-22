import { Field, InputType } from '@nestjs/graphql';
import { ProductFilter, ProductFilterInput } from './product-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneProductInput {
  @Field(() => ProductFilterInput, {nullable: true} )  where?: Filter<ProductFilter>;
}

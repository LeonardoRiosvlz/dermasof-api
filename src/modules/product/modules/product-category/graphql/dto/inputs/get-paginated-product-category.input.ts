import { Field, InputType } from '@nestjs/graphql';
import { ProductCategoryFilter,ProductCategoryFilterInput } from './product-category-filter.input';
import { OrderByProductCategoryInput } from './order-by-product-category.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedProductCategoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ProductCategoryFilterInput, {nullable: true} )  where?: Filter<ProductCategoryFilter>;
  @Field(() => OrderByProductCategoryInput, {nullable: true} )  orderBy?: OrderByProductCategoryInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByServiceCategoryInput } from './order-by-service-category.input';
import { ServiceCategoryFilter, ServiceCategoryFilterInput } from './service-category-filter.input';

@InputType()
export class GetAllServiceCategoryInput {
  @Field(() => ServiceCategoryFilterInput, {nullable: true} )  where?: Filter<ServiceCategoryFilter>;
  @Field(() => OrderByServiceCategoryInput, {nullable: true} )  orderBy?: OrderByServiceCategoryInput;
}

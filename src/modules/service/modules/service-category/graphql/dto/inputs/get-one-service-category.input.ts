import { Field, InputType } from '@nestjs/graphql';
import { ServiceCategoryFilter, ServiceCategoryFilterInput } from './service-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneServiceCategoryInput {
  @Field(() => ServiceCategoryFilterInput, {nullable: true} )  where?: Filter<ServiceCategoryFilter>;
}

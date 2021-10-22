import { Field, InputType, ID } from '@nestjs/graphql';
import { ServiceCategoryFilter, ServiceCategoryFilterInput } from './service-category-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyServiceCategoryInput {
  @Field(() => ServiceCategoryFilterInput, {nullable: true} )  where?: Filter<ServiceCategoryFilter>;
}

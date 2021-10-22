import { Field, InputType } from '@nestjs/graphql';
import { ServiceCategoryFilter,ServiceCategoryFilterInput } from './service-category-filter.input';
import { OrderByServiceCategoryInput } from './order-by-service-category.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedServiceCategoryInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ServiceCategoryFilterInput, {nullable: true} )  where?: Filter<ServiceCategoryFilter>;
  @Field(() => OrderByServiceCategoryInput, {nullable: true} )  orderBy?: OrderByServiceCategoryInput;
}

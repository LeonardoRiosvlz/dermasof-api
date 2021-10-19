import { Field, InputType } from '@nestjs/graphql';
import { DataParameterizationFilter,DataParameterizationFilterInput } from './data-parameterization-filter.input';
import { OrderByDataParameterizationInput } from './order-by-data-parameterization.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedDataParameterizationInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => DataParameterizationFilterInput, {nullable: true} )  where?: Filter<DataParameterizationFilter>;
  @Field(() => OrderByDataParameterizationInput, {nullable: true} )  orderBy?: OrderByDataParameterizationInput;
}

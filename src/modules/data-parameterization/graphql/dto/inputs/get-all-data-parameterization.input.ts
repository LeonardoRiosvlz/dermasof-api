import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByDataParameterizationInput } from './order-by-data-parameterization.input';
import { DataParameterizationFilter, DataParameterizationFilterInput } from './data-parameterization-filter.input';

@InputType()
export class GetAllDataParameterizationInput {
  @Field(() => DataParameterizationFilterInput, {nullable: true} )  where?: Filter<DataParameterizationFilter>;
  @Field(() => OrderByDataParameterizationInput, {nullable: true} )  orderBy?: OrderByDataParameterizationInput;
}

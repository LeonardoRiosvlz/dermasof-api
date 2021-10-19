import { Field, InputType } from '@nestjs/graphql';
import { DataParameterizationFilter, DataParameterizationFilterInput } from './data-parameterization-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneDataParameterizationInput {
  @Field(() => DataParameterizationFilterInput, {nullable: true} )  where?: Filter<DataParameterizationFilter>;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { DataParameterizationFilter, DataParameterizationFilterInput } from './data-parameterization-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDataParameterizationInput {
  @Field(() => DataParameterizationFilterInput, {nullable: true} )  where?: Filter<DataParameterizationFilter>;
}

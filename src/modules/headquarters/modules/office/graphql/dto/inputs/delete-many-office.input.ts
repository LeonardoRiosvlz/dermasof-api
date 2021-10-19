import { Field, InputType, ID } from '@nestjs/graphql';
import { OfficeFilter, OfficeFilterInput } from './office-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyOfficeInput {
  @Field(() => OfficeFilterInput, {nullable: true} )  where?: Filter<OfficeFilter>;
}

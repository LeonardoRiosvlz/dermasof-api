import { Field, InputType } from '@nestjs/graphql';
import { OfficeFilter, OfficeFilterInput } from './office-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneOfficeInput {
  @Field(() => OfficeFilterInput, {nullable: true} )  where?: Filter<OfficeFilter>;
}

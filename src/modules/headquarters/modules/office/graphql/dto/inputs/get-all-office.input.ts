import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByOfficeInput } from './order-by-office.input';
import { OfficeFilter, OfficeFilterInput } from './office-filter.input';

@InputType()
export class GetAllOfficeInput {
  @Field(() => OfficeFilterInput, {nullable: true} )  where?: Filter<OfficeFilter>;
  @Field(() => OrderByOfficeInput, {nullable: true} )  orderBy?: OrderByOfficeInput;
}

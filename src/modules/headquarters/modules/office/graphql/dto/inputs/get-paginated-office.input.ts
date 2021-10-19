import { Field, InputType } from '@nestjs/graphql';
import { OfficeFilter,OfficeFilterInput } from './office-filter.input';
import { OrderByOfficeInput } from './order-by-office.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedOfficeInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => OfficeFilterInput, {nullable: true} )  where?: Filter<OfficeFilter>;
  @Field(() => OrderByOfficeInput, {nullable: true} )  orderBy?: OrderByOfficeInput;
}

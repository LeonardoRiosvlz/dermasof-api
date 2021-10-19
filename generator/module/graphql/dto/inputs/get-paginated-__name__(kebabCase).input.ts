import { Field, InputType } from '@nestjs/graphql';
import { __name__Filter,__name__FilterInput } from './__name__(kebabCase)-filter.input';
import { OrderBy__name__Input } from './order-by-__name__(kebabCase).input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginated__name__Input {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => __name__FilterInput, {nullable: true} )  where?: Filter<__name__Filter>;
  @Field(() => OrderBy__name__Input, {nullable: true} )  orderBy?: OrderBy__name__Input;
}

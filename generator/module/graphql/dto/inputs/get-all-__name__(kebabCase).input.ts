import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderBy__name__Input } from './order-by-__name__(kebabCase).input';
import { __name__Filter, __name__FilterInput } from './__name__(kebabCase)-filter.input';

@InputType()
export class GetAll__name__Input {
  @Field(() => __name__FilterInput, {nullable: true} )  where?: Filter<__name__Filter>;
  @Field(() => OrderBy__name__Input, {nullable: true} )  orderBy?: OrderBy__name__Input;
}

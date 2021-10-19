import { Field, InputType, ID } from '@nestjs/graphql';
import { __name__Filter, __name__FilterInput } from './__name__(kebabCase)-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteMany__name__Input {
  @Field(() => __name__FilterInput, {nullable: true} )  where?: Filter<__name__Filter>;
}

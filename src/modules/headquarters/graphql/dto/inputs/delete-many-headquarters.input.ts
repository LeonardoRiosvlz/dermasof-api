import { Field, InputType, ID } from '@nestjs/graphql';
import { HeadquartersFilter, HeadquartersFilterInput } from './headquarters-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyHeadquartersInput {
  @Field(() => HeadquartersFilterInput, {nullable: true} )  where?: Filter<HeadquartersFilter>;
}

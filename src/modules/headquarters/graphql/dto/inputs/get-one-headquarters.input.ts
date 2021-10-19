import { Field, InputType } from '@nestjs/graphql';
import { HeadquartersFilter, HeadquartersFilterInput } from './headquarters-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneHeadquartersInput {
  @Field(() => HeadquartersFilterInput, {nullable: true} )  where?: Filter<HeadquartersFilter>;
}

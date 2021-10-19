import { Field, InputType } from '@nestjs/graphql';
import { PathologiesFilter, PathologiesFilterInput } from './pathologies-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePathologiesInput {
  @Field(() => PathologiesFilterInput, {nullable: true} )  where?: Filter<PathologiesFilter>;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByHeadquartersInput } from './order-by-headquarters.input';
import { HeadquartersFilter, HeadquartersFilterInput } from './headquarters-filter.input';

@InputType()
export class GetAllHeadquartersInput {
  @Field(() => HeadquartersFilterInput, {nullable: true} )  where?: Filter<HeadquartersFilter>;
  @Field(() => OrderByHeadquartersInput, {nullable: true} )  orderBy?: OrderByHeadquartersInput;
}

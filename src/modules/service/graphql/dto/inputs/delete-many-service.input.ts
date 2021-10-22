import { Field, InputType, ID } from '@nestjs/graphql';
import { ServiceFilter, ServiceFilterInput } from './service-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyServiceInput {
  @Field(() => ServiceFilterInput, {nullable: true} )  where?: Filter<ServiceFilter>;
}

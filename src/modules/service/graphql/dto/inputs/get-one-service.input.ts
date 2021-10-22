import { Field, InputType } from '@nestjs/graphql';
import { ServiceFilter, ServiceFilterInput } from './service-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneServiceInput {
  @Field(() => ServiceFilterInput, {nullable: true} )  where?: Filter<ServiceFilter>;
}

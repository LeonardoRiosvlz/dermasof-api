import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByServiceInput } from './order-by-service.input';
import { ServiceFilter, ServiceFilterInput } from './service-filter.input';

@InputType()
export class GetAllServiceInput {
  @Field(() => ServiceFilterInput, {nullable: true} )  where?: Filter<ServiceFilter>;
  @Field(() => OrderByServiceInput, {nullable: true} )  orderBy?: OrderByServiceInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { TenantFilter, TenantFilterInput } from '../../filters/tenant.filter';

@InputType()
export class GetOneTenantInput {
  @Field(() => TenantFilterInput, {nullable: true} )  where?: Filter<TenantFilter>;
}

import { InputType, Field } from '@nestjs/graphql';
import { BaseInput } from 'src/shared/dto/base-input.dto';
import { TenantFilter, TenantFilterInput } from '../../filters/tenant.filter';
import { Filter } from '@nestjs-query/core';
import { OrderByTenantInput } from './order-by-tenant.input';

@InputType()
export class GetAllTenantsInput extends BaseInput {
  @Field(() => TenantFilterInput) where?: Filter<TenantFilter>;
  @Field(() => OrderByTenantInput) orderBy?: OrderByTenantInput;

}

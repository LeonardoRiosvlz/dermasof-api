import { InputType, Field } from '@nestjs/graphql';
import { BaseInput } from 'src/shared/dto/base-input.dto';
import { TenantFilter, TenantFilterInput } from '../../filters/tenant.filter';
import { Filter } from '@nestjs-query/core';
import { OrderByTenantInput } from './order-by-tenant.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';

@InputType()
export class GetPaginatedTenantInput extends BaseInput {
  @Field(() => PaginatorParams) paginator: PaginatorParams;
  @Field(() => TenantFilterInput) where?: Filter<TenantFilter>;
  @Field(() => OrderByTenantInput) orderBy?: OrderByTenantInput;

}

import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from '../../../data-access/mongoose/types/filterable-fields.type';
import { TenantEntity } from '../../entities/tenant.entity';

@ObjectType()
export class TenantFilter implements IEntityFilter<TenantEntity> {
  @FilterableField(() => String, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) code?: string;
  @FilterableField(() => String, { nullable: true }) name?: string;
  @FilterableField(() => Boolean, { nullable: true }) isActive?: boolean;

  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;

}

export const TenantFilterInput = FilterType(TenantFilter);
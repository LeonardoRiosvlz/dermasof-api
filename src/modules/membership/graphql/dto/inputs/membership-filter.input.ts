import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MembershipEntity } from '../../../entities/membership.entity';

@ObjectType()
export class MembershipFilter implements IEntityFilter<MembershipEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) cost?: string;
  @FilterableField(()=>String, { nullable: true}) name?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const MembershipFilterInput = FilterType(MembershipFilter);
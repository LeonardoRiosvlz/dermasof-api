import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { RegionEntity } from '../../../entities/region.entity';

@ObjectType()
export class RegionFilter implements IEntityFilter<RegionEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const RegionFilterInput = FilterType(RegionFilter);
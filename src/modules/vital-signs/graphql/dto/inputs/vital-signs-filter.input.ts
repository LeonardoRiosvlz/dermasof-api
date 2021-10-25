import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';

@ObjectType()
export class VitalSignsFilter implements IEntityFilter<VitalSignsEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) heartRate?: string;
  @FilterableField(()=>String, { nullable: true}) breathingFrequency?: string;
  @FilterableField(()=>String, { nullable: true }) weight?: string;
  @FilterableField(()=>String, { nullable: true}) bloodPressure?: string;
  @FilterableField(()=>String, { nullable: true }) temperature?: string;
  @FilterableField(()=>String, { nullable: true }) saturation?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const VitalSignsFilterInput = FilterType(VitalSignsFilter);
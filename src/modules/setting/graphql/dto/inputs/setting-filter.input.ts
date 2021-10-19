import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SettingEntity } from '../../../entities/setting.entity';

@ObjectType()
export class SettingFilter implements IEntityFilter<SettingEntity>{
  @FilterableField(()=>String, { nullable: true }) email?: string;
  @FilterableField(()=>String, { nullable: true }) address?: string;
  @FilterableField(()=>String, { nullable: true}) phoneNumber?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const SettingFilterInput = FilterType(SettingFilter);
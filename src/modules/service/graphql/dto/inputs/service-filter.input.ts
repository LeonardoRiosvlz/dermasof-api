import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ServiceEntity } from '../../../entities/service.entity';

@ObjectType()
export class ServiceFilter implements IEntityFilter<ServiceEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) code?: string;
  @FilterableField(()=>String, { nullable: true}) name?: string;
  @FilterableField(()=>String, { nullable: true}) category?: string;
  @FilterableField(()=>String, { nullable: true}) price?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ServiceFilterInput = FilterType(ServiceFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';

@ObjectType()
export class HeadquartersFilter implements IEntityFilter<HeadquartersEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) code?: string;
  @FilterableField(()=>String, { nullable: true}) city?: string;
  @FilterableField(()=>String, { nullable: true}) email?: string;
  @FilterableField(()=>String, { nullable: true}) phoneNumber?: string;
  @FilterableField(()=>String, { nullable: true}) address?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const HeadquartersFilterInput = FilterType(HeadquartersFilter);
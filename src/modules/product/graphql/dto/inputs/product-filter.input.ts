import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProductEntity } from '../../../entities/product.entity';

@ObjectType()
export class ProductFilter implements IEntityFilter<ProductEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) code?: string;
  @FilterableField(()=>String, { nullable: true}) name?: string;
  @FilterableField(()=>String, { nullable: true}) category?: string;
  @FilterableField(()=>String, { nullable: true}) price?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ProductFilterInput = FilterType(ProductFilter);
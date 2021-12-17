import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';

@ObjectType()
export class PhotographicReportFilter implements IEntityFilter<PhotographicReportEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;
  @FilterableField(()=>String, { nullable: true}) patient?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const PhotographicReportFilterInput = FilterType(PhotographicReportFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';

@ObjectType()
export class IndicationsPatientFilter implements IEntityFilter<IndicationsPatientEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const IndicationsPatientFilterInput = FilterType(IndicationsPatientFilter);
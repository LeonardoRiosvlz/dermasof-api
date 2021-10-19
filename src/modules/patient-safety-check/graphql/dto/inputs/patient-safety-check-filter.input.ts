import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientSafetyCheckEntity } from '../../../entities/patient-safety-check.entity';

@ObjectType()
export class PatientSafetyCheckFilter implements IEntityFilter<PatientSafetyCheckEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const PatientSafetyCheckFilterInput = FilterType(PatientSafetyCheckFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';

@ObjectType()
export class PatientDataSettingsFilter implements IEntityFilter<PatientDataSettingsEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const PatientDataSettingsFilterInput = FilterType(PatientDataSettingsFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';

@ObjectType()
export class ClinicHistoryFilter implements IEntityFilter<ClinicHistoryEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) patient?: string;
  @FilterableField(()=>String, { nullable: true}) externalCause?: string;
  @FilterableField(()=>String, { nullable: true}) clinicHistoryType?: string;
  @FilterableField(()=>String, { nullable: true}) otherHistory?: string;
  @FilterableField(()=>String, { nullable: true}) familyHistory?: string;
  @FilterableField(()=>String, { nullable: true}) pharmacologicalHistory?: string;
  @FilterableField(()=>String, { nullable: true}) allergicHistory?: string;
  @FilterableField(()=>String, { nullable: true}) surgicalHistory?: string;
  @FilterableField(()=>String, { nullable: true}) medicalHistory?: string;
  @FilterableField(()=>String, { nullable: true}) reasonForConsultation?: string;
  @FilterableField(()=>String, { nullable: true}) currentIllness?: string;
  @FilterableField(()=>String, { nullable: true}) systemsReview?: string;
  @FilterableField(()=>String, { nullable: true}) physicalExam?: string;
  @FilterableField(()=>String, { nullable: true}) analysis?: string;
  @FilterableField(()=>String, { nullable: true}) observations?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ClinicHistoryFilterInput = FilterType(ClinicHistoryFilter);
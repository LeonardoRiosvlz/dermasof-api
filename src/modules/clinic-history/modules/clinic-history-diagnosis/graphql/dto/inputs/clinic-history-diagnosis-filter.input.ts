import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';

@ObjectType()
export class ClinicHistoryDiagnosisFilter implements IEntityFilter<ClinicHistoryDiagnosisEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) clinicHistory?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ClinicHistoryDiagnosisFilterInput = FilterType(ClinicHistoryDiagnosisFilter);
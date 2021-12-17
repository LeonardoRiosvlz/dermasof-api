import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';

@ObjectType()
export class ClinicHistoryProcedureFilter implements IEntityFilter<ClinicHistoryProcedureEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const ClinicHistoryProcedureFilterInput = FilterType(ClinicHistoryProcedureFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';

@ObjectType()
export class DataParameterizationFilter implements IEntityFilter<DataParameterizationEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) paymentDeadlines?: string;
  @FilterableField(()=>String, { nullable: true}) deadlineForPaymentReminder?: string;
  @FilterableField(()=>String, { nullable: true}) deadlineForAppointmentReminder?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const DataParameterizationFilterInput = FilterType(DataParameterizationFilter);
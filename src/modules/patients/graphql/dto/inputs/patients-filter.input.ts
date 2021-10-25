import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PatientsEntity } from '../../../entities/patients.entity';

@ObjectType()
export class PatientsFilter implements IEntityFilter<PatientsEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) lastName?: string;
  @FilterableField(()=>String, { nullable: true}) firstName?: string;
  @FilterableField(()=>String, { nullable: true}) firstSurName?: string;
  @FilterableField(()=>String, { nullable: true}) lastSurName?: string;
  @FilterableField(()=>String, { nullable: true}) dateOfBirth?: string;
  @FilterableField(()=>String, { nullable: true}) gender?: string;
  @FilterableField(()=>String, { nullable: true}) documentType?: string;
  @FilterableField(()=>String, { nullable: true}) documentNumber?: string;
  @FilterableField(()=>String, { nullable: true}) phoneNumber?: string;
  @FilterableField(()=>String, { nullable: true}) email?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const PatientsFilterInput = FilterType(PatientsFilter);
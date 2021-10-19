import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MembershipEntity } from '../../../entities/membership.entity';

@ObjectType()
export class MembershipFilter implements IEntityFilter<MembershipEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) validity?: string;
  @FilterableField(()=>String, { nullable: true}) daysAfterExpired?: string;
  @FilterableField(()=>String, { nullable: true}) limitPatients?: string;
  @FilterableField(()=>String, { nullable: true}) limitHeadquarters?: string;
  @FilterableField(()=>String, { nullable: true}) administrativeUserQuantity?: string;
  @FilterableField(()=>String, { nullable: true}) medicalUserQuantity?: string;
  @FilterableField(()=>String, { nullable: true}) NumberSmsAllowed?: string;
  @FilterableField(()=>String, { nullable: true}) hoursAllowedVideoConsultation?: string;
  @FilterableField(()=>String, { nullable: true}) additionalCostHeadquarters?: string;
  @FilterableField(()=>String, { nullable: true}) additionalCostPerAdministrativeUser?: string;
  @FilterableField(()=>String, { nullable: true}) additionalCostPerMedicalUser?: string;
  @FilterableField(()=>String, { nullable: true}) additionalCostHoursVideoConsultation?: string;
  @FilterableField(()=>String, { nullable: true}) additionalCostSmsPackage?: string; 
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const MembershipFilterInput = FilterType(MembershipFilter);
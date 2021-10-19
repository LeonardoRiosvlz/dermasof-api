import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeType } from '../../../entities/office.entity';

@ObjectType()
export class OfficeFilter implements IEntityFilter<OfficeEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) description?: string;
  @FilterableField(()=>OfficeType) officeType: OfficeType;
  @FilterableField(()=>ID) floor: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const OfficeFilterInput = FilterType(OfficeFilter);
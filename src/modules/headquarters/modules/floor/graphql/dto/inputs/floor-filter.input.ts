import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ID, Int, ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FloorEntity } from '../../../entities/floor.entity';

@ObjectType()
export class FloorFilter implements IEntityFilter<FloorEntity> {
  @FilterableField(() => String, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) name?: string;
  @FilterableField(() => Int, { nullable: true }) location?: number;
  @FilterableField(() => String, { nullable: true }) description?: string;
  @FilterableField(() => ID, { nullable: true }) headquarter?: string;

  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;

}

export const FloorFilterInput = FilterType(FloorFilter);
import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesEntity, FileStatus, FileStorageType } from '../../../entities/files.entity';

@ObjectType()
export class FilesFilter implements IEntityFilter<FilesEntity> {

  @FilterableField(() => String, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) url?: string;
  @FilterableField(() => String, { nullable: true }) key?: string;
  @FilterableField(() => String, { nullable: true }) filename?: string;
  @FilterableField(() => String, { nullable: true }) bytes?: number;
  @FilterableField(() => String, { nullable: true }) storage?: FileStorageType;
  @FilterableField(() => String, { nullable: true }) status?: FileStatus;


  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;

}

export const FilesFilterInput = FilterType(FilesFilter);
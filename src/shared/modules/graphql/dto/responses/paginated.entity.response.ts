import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ClassType } from 'type-graphql';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

export default function PaginatedData<T>(Type: ClassType<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedDataClass implements IPaginatedData<T> {
    @Field(type => [Type]) items: T[];
    @Field(type => Int) total: number;
    @Field(type => Int) totalPages: number;
    @Field(type => Int) limit: number;
    @Field(type => Int) currentPage: number;
  }
  return PaginatedDataClass;
}

import { Field, InputType } from '@nestjs/graphql';
import { FilesFilter,FilesFilterInput } from './files-filter.input';
import { OrderByFilesInput } from './order-by-files.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesFilterInput, {nullable: true} )  where?: Filter<FilesFilter>;
  @Field(() => OrderByFilesInput, {nullable: true} )  orderBy?: OrderByFilesInput;
}

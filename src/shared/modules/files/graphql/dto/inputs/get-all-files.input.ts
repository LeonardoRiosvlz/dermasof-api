import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesInput } from './order-by-files.input';
import { FilesFilter, FilesFilterInput } from './files-filter.input';

@InputType()
export class GetAllFilesInput {
  @Field(() => FilesFilterInput, {nullable: true} )  where?: Filter<FilesFilter>;
  @Field(() => OrderByFilesInput, {nullable: true} )  orderBy?: OrderByFilesInput;
}

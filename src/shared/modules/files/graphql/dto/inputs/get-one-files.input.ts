import { Field, InputType } from '@nestjs/graphql';
import { FilesFilter, FilesFilterInput } from './files-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesInput {
  @Field(() => FilesFilterInput, {nullable: true} )  where?: Filter<FilesFilter>;
}

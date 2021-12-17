import { Field, InputType, ID } from '@nestjs/graphql';
import { FilesPhotographicReportFilter, FilesPhotographicReportFilterInput } from './files-photographic-report-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyFilesPhotographicReportInput {
  @Field(() => FilesPhotographicReportFilterInput, {nullable: true} )  where?: Filter<FilesPhotographicReportFilter>;
}

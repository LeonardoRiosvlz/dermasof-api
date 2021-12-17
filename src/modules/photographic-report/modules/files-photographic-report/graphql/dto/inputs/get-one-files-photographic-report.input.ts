import { Field, InputType } from '@nestjs/graphql';
import { FilesPhotographicReportFilter, FilesPhotographicReportFilterInput } from './files-photographic-report-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesPhotographicReportInput {
  @Field(() => FilesPhotographicReportFilterInput, {nullable: true} )  where?: Filter<FilesPhotographicReportFilter>;
}

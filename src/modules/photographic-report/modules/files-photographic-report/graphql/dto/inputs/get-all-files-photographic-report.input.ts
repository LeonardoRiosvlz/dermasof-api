import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesPhotographicReportInput } from './order-by-files-photographic-report.input';
import { FilesPhotographicReportFilter, FilesPhotographicReportFilterInput } from './files-photographic-report-filter.input';

@InputType()
export class GetAllFilesPhotographicReportInput {
  @Field(() => FilesPhotographicReportFilterInput, {nullable: true} )  where?: Filter<FilesPhotographicReportFilter>;
  @Field(() => OrderByFilesPhotographicReportInput, {nullable: true} )  orderBy?: OrderByFilesPhotographicReportInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { FilesPhotographicReportFilter,FilesPhotographicReportFilterInput } from './files-photographic-report-filter.input';
import { OrderByFilesPhotographicReportInput } from './order-by-files-photographic-report.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesPhotographicReportInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesPhotographicReportFilterInput, {nullable: true} )  where?: Filter<FilesPhotographicReportFilter>;
  @Field(() => OrderByFilesPhotographicReportInput, {nullable: true} )  orderBy?: OrderByFilesPhotographicReportInput;
}

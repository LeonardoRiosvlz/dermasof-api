import { Field, InputType } from '@nestjs/graphql';
import { PhotographicReportFilter,PhotographicReportFilterInput } from './photographic-report-filter.input';
import { OrderByPhotographicReportInput } from './order-by-photographic-report.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedPhotographicReportInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => PhotographicReportFilterInput, {nullable: true} )  where?: Filter<PhotographicReportFilter>;
  @Field(() => OrderByPhotographicReportInput, {nullable: true} )  orderBy?: OrderByPhotographicReportInput;
}

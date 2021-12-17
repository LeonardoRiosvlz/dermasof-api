import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByPhotographicReportInput } from './order-by-photographic-report.input';
import { PhotographicReportFilter, PhotographicReportFilterInput } from './photographic-report-filter.input';

@InputType()
export class GetAllPhotographicReportInput {
  @Field(() => PhotographicReportFilterInput, {nullable: true} )  where?: Filter<PhotographicReportFilter>;
  @Field(() => OrderByPhotographicReportInput, {nullable: true} )  orderBy?: OrderByPhotographicReportInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { PhotographicReportFilter, PhotographicReportFilterInput } from './photographic-report-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOnePhotographicReportInput {
  @Field(() => PhotographicReportFilterInput, {nullable: true} )  where?: Filter<PhotographicReportFilter>;
}

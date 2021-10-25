import { Field, InputType } from '@nestjs/graphql';
import { ConsultationTypeFilter,ConsultationTypeFilterInput } from './consultation-type-filter.input';
import { OrderByConsultationTypeInput } from './order-by-consultation-type.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedConsultationTypeInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ConsultationTypeFilterInput, {nullable: true} )  where?: Filter<ConsultationTypeFilter>;
  @Field(() => OrderByConsultationTypeInput, {nullable: true} )  orderBy?: OrderByConsultationTypeInput;
}

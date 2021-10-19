import { Field, InputType } from '@nestjs/graphql';
import { IndicationsPatientFilter,IndicationsPatientFilterInput } from './indications-patient-filter.input';
import { OrderByIndicationsPatientInput } from './order-by-indications-patient.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedIndicationsPatientInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => IndicationsPatientFilterInput, {nullable: true} )  where?: Filter<IndicationsPatientFilter>;
  @Field(() => OrderByIndicationsPatientInput, {nullable: true} )  orderBy?: OrderByIndicationsPatientInput;
}

import { Field, InputType } from '@nestjs/graphql';
import { LaboratoryExamsFilter,LaboratoryExamsFilterInput } from './laboratory-exams-filter.input';
import { OrderByLaboratoryExamsInput } from './order-by-laboratory-exams.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedLaboratoryExamsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => LaboratoryExamsFilterInput, {nullable: true} )  where?: Filter<LaboratoryExamsFilter>;
  @Field(() => OrderByLaboratoryExamsInput, {nullable: true} )  orderBy?: OrderByLaboratoryExamsInput;
}

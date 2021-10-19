import { Field, InputType } from '@nestjs/graphql';
import { MedicalSpecialtiesFilter,MedicalSpecialtiesFilterInput } from './medical-specialties-filter.input';
import { OrderByMedicalSpecialtiesInput } from './order-by-medical-specialties.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedMedicalSpecialtiesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => MedicalSpecialtiesFilterInput, {nullable: true} )  where?: Filter<MedicalSpecialtiesFilter>;
  @Field(() => OrderByMedicalSpecialtiesInput, {nullable: true} )  orderBy?: OrderByMedicalSpecialtiesInput;
}

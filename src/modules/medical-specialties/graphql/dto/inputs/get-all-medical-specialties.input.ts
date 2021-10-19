import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByMedicalSpecialtiesInput } from './order-by-medical-specialties.input';
import { MedicalSpecialtiesFilter, MedicalSpecialtiesFilterInput } from './medical-specialties-filter.input';

@InputType()
export class GetAllMedicalSpecialtiesInput {
  @Field(() => MedicalSpecialtiesFilterInput, {nullable: true} )  where?: Filter<MedicalSpecialtiesFilter>;
  @Field(() => OrderByMedicalSpecialtiesInput, {nullable: true} )  orderBy?: OrderByMedicalSpecialtiesInput;
}

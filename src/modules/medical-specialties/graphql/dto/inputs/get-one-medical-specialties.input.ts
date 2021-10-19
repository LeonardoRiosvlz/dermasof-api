import { Field, InputType } from '@nestjs/graphql';
import { MedicalSpecialtiesFilter, MedicalSpecialtiesFilterInput } from './medical-specialties-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneMedicalSpecialtiesInput {
  @Field(() => MedicalSpecialtiesFilterInput, {nullable: true} )  where?: Filter<MedicalSpecialtiesFilter>;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdMedicalSpecialtiesInput {
  @Field(() => ID, )  entity__Id: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteMedicalSpecialtiesInput {
  @Field(() => ID, )  entityId: string;
}

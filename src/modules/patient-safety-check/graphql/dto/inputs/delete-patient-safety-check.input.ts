import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePatientSafetyCheckInput {
  @Field(() => ID, )  entityId: string;
}

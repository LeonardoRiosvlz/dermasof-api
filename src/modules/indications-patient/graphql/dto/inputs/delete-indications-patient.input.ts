import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteIndicationsPatientInput {
  @Field(() => ID, )  entityId: string;
}

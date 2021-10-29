import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClinicHistoryInput {
  @Field(() => ID, )  entityId: string;
}

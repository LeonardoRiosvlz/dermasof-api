import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteNotificationInput {
  @Field(() => ID, )  entityId: string;
}

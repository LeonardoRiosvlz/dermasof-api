import { Field, ID, InputType } from '@nestjs/graphql';


@InputType()
export class PartialNotificationInput {
  @Field(() => Boolean, { nullable: true }) isRead?: boolean;

}

@InputType()
export class UpdateNotificationInput {
  @Field(() => ID) entityId: string;
  @Field(() => PartialNotificationInput) update: PartialNotificationInput;

}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdNotificationInput {
  @Field(() => ID, )  entity__Id: string;
}

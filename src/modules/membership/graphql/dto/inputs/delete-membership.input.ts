import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteMembershipInput {
  @Field(() => ID, )  entityId: string;
}

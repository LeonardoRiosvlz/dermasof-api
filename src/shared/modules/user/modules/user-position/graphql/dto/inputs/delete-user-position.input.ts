import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteUserPositionInput {
  @Field(() => ID, )  entityId: string;
}

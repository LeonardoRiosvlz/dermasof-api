import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFloorInput {
  @Field(() => ID, )  entityId: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteRoleInput {
  @Field(() => ID, )  entityId: string;
}

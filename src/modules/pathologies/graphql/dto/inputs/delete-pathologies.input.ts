import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePathologiesInput {
  @Field(() => ID, )  entityId: string;
}

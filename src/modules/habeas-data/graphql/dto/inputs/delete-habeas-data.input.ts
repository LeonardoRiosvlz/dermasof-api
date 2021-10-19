import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteHabeasDataInput {
  @Field(() => ID, )  entityId: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteServiceInput {
  @Field(() => ID, )  entityId: string;
}

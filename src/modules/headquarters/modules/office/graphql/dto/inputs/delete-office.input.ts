import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteOfficeInput {
  @Field(() => ID, )  entityId: string;
}

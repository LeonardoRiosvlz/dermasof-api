import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesInput {
  @Field(() => ID, )  entityId: string;
}

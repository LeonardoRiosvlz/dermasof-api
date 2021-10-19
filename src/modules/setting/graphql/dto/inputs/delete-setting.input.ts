import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteSettingInput {
  @Field(() => ID, )  entityId: string;
}

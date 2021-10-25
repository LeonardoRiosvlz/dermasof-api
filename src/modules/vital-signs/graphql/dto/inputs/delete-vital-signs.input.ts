import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteVitalSignsInput {
  @Field(() => ID, )  entityId: string;
}

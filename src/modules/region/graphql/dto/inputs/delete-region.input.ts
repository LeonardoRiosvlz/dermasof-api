import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteRegionInput {
  @Field(() => ID, )  entityId: string;
}

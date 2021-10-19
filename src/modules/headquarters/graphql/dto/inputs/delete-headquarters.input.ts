import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteHeadquartersInput {
  @Field(() => ID, )  entityId: string;
}

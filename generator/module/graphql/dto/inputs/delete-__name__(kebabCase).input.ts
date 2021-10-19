import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class Delete__name__Input {
  @Field(() => ID, )  entityId: string;
}

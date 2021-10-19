import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdUserPositionInput {
  @Field(() => ID, )  entity__Id: string;
}

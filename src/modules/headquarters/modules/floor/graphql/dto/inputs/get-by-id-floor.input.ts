import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFloorInput {
  @Field(() => ID, )  entity__Id: string;
}

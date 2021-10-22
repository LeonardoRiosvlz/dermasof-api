import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdProductInput {
  @Field(() => ID, )  entity__Id: string;
}

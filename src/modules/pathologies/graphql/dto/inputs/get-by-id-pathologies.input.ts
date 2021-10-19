import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPathologiesInput {
  @Field(() => ID, )  entity__Id: string;
}

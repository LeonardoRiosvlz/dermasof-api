import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdMembershipInput {
  @Field(() => ID, )  entity__Id: string;
}

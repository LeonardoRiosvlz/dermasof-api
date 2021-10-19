import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdUserAreaInput {
  @Field(() => ID, )  entity__Id: string;
}

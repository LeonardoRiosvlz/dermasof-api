import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdHeadquartersInput {
  @Field(() => ID, )  entity__Id: string;
}

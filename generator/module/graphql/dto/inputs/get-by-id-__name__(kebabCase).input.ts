import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetById__name__Input {
  @Field(() => ID, )  entity__Id: string;
}

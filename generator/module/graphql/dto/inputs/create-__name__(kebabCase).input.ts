import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class Create__name__Input {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUpInput  {
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  lastname: string;
  @Field()
  firstname: string;
  @Field()
  username: string;
}

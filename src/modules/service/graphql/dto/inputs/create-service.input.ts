import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  @Field(() => String, )  name: string;
  @Field(() => String, )  code: string;
  @Field(() => Float, )  price: number;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => ID, { nullable: true }) category?: string;
}

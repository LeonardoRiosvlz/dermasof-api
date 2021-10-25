import { Field, InputType, ID, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, )  name: string;
  @Field(() => String, )  code: string;
  @Field(() => Float, )  price: number;
  @Field(() => Int, )  minimumStock: number;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => ID, { nullable: true }) category?: string;
}

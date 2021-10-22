import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
}

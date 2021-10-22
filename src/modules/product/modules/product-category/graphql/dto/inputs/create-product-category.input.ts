import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
}

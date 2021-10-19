import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateFloorInput {
  @Field(() => String, )  name: string;
  @Field(()=>Int ) location: number;

  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, {defaultValue: true} )  isActive: boolean;
  @Field(() => ID )  headquarter: string;
}

import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateHeadquartersInput {
  @Field(() => String, )  name: string;
  @Field(() => String, )  code: string;
  @Field(() => String, )  city: string;
  @Field(() => String, )  email: string;
  @Field(() => String, )  phoneNumber: string;
  @Field(() => String, )  address: string;
  @Field(() => ID) manager: string;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}

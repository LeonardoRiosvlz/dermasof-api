import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdOfficeInput {
  @Field(() => ID, )  entity__Id: string;
}

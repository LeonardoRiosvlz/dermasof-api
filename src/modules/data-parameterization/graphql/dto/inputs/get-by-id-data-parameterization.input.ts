import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdDataParameterizationInput {
  @Field(() => ID, )  entity__Id: string;
}

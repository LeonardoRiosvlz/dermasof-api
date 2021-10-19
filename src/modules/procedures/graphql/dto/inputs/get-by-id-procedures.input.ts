import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdProceduresInput {
  @Field(() => ID, )  entity__Id: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPatientsInput {
  @Field(() => ID, )  entity__Id: string;
}

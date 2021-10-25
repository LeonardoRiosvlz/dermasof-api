import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdConsultationTypeInput {
  @Field(() => ID, )  entity__Id: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteConsultationTypeInput {
  @Field(() => ID, )  entityId: string;
}

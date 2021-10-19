import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteInformedConsentInput {
  @Field(() => ID, )  entityId: string;
}

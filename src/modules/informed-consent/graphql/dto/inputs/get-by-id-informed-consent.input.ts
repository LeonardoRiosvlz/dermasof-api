import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdInformedConsentInput {
  @Field(() => ID, )  entity__Id: string;
}

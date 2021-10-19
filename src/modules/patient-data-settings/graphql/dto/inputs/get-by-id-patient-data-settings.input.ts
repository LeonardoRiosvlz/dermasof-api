import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPatientDataSettingsInput {
  @Field(() => ID, )  entity__Id: string;
}

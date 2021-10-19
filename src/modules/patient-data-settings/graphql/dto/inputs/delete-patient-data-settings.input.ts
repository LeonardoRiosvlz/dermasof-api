import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePatientDataSettingsInput {
  @Field(() => ID, )  entityId: string;
}

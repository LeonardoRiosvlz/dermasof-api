import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePatientDataSettingsInput } from './create-patient-data-settings.input';


@InputType()
export class PartialPatientDataSettingsInput extends PartialType(CreatePatientDataSettingsInput) {}

@InputType()
export class UpdatePatientDataSettingsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPatientDataSettingsInput)  update: PartialPatientDataSettingsInput;

}

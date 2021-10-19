import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePatientSafetyCheckInput } from './create-patient-safety-check.input';


@InputType()
export class PartialPatientSafetyCheckInput extends PartialType(CreatePatientSafetyCheckInput) {}

@InputType()
export class UpdatePatientSafetyCheckInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPatientSafetyCheckInput)  update: PartialPatientSafetyCheckInput;

}

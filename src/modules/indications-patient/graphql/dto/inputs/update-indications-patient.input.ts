import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateIndicationsPatientInput } from './create-indications-patient.input';


@InputType()
export class PartialIndicationsPatientInput extends PartialType(CreateIndicationsPatientInput) {}

@InputType()
export class UpdateIndicationsPatientInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialIndicationsPatientInput)  update: PartialIndicationsPatientInput;

}

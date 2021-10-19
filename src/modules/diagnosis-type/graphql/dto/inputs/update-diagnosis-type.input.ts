import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDiagnosisTypeInput } from './create-diagnosis-type.input';


@InputType()
export class PartialDiagnosisTypeInput extends PartialType(CreateDiagnosisTypeInput) {}

@InputType()
export class UpdateDiagnosisTypeInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDiagnosisTypeInput)  update: PartialDiagnosisTypeInput;

}

import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDiagnosisInput } from './create-diagnosis.input';


@InputType()
export class PartialDiagnosisInput extends PartialType(CreateDiagnosisInput) {}

@InputType()
export class UpdateDiagnosisInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDiagnosisInput)  update: PartialDiagnosisInput;

}

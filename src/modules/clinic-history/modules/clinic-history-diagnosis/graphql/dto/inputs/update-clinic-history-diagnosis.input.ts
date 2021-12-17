import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClinicHistoryDiagnosisInput } from './create-clinic-history-diagnosis.input';


@InputType()
export class PartialClinicHistoryDiagnosisInput extends PartialType(CreateClinicHistoryDiagnosisInput) {}

@InputType()
export class UpdateClinicHistoryDiagnosisInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClinicHistoryDiagnosisInput)  update: PartialClinicHistoryDiagnosisInput;

}

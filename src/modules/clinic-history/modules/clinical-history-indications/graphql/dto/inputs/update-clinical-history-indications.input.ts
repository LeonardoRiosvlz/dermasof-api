import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClinicalHistoryIndicationsInput } from './create-clinical-history-indications.input';


@InputType()
export class PartialClinicalHistoryIndicationsInput extends PartialType(CreateClinicalHistoryIndicationsInput) {}

@InputType()
export class UpdateClinicalHistoryIndicationsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClinicalHistoryIndicationsInput)  update: PartialClinicalHistoryIndicationsInput;

}

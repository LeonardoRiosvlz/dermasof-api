import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClinicHistoryProcedureInput } from './create-clinic-history-procedure.input';


@InputType()
export class PartialClinicHistoryProcedureInput extends PartialType(CreateClinicHistoryProcedureInput) {}

@InputType()
export class UpdateClinicHistoryProcedureInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClinicHistoryProcedureInput)  update: PartialClinicHistoryProcedureInput;

}

import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClinicHistoryInput } from './create-clinic-history.input';


@InputType()
export class PartialClinicHistoryInput extends PartialType(CreateClinicHistoryInput) {}

@InputType()
export class UpdateClinicHistoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClinicHistoryInput)  update: PartialClinicHistoryInput;

}

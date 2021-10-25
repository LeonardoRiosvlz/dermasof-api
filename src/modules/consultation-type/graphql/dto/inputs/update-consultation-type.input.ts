import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateConsultationTypeInput } from './create-consultation-type.input';


@InputType()
export class PartialConsultationTypeInput extends PartialType(CreateConsultationTypeInput) {}

@InputType()
export class UpdateConsultationTypeInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialConsultationTypeInput)  update: PartialConsultationTypeInput;

}

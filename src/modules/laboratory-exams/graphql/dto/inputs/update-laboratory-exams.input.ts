import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateLaboratoryExamsInput } from './create-laboratory-exams.input';


@InputType()
export class PartialLaboratoryExamsInput extends PartialType(CreateLaboratoryExamsInput) {}

@InputType()
export class UpdateLaboratoryExamsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialLaboratoryExamsInput)  update: PartialLaboratoryExamsInput;

}

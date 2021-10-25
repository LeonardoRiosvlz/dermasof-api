import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePatientsInput } from './create-patients.input';


@InputType()
export class PartialPatientsInput extends PartialType(CreatePatientsInput) {}

@InputType()
export class UpdatePatientsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPatientsInput)  update: PartialPatientsInput;

}

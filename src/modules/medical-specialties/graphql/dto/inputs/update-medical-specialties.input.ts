import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateMedicalSpecialtiesInput } from './create-medical-specialties.input';


@InputType()
export class PartialMedicalSpecialtiesInput extends PartialType(CreateMedicalSpecialtiesInput) {}

@InputType()
export class UpdateMedicalSpecialtiesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialMedicalSpecialtiesInput)  update: PartialMedicalSpecialtiesInput;

}

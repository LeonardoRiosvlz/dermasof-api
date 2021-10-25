import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateVitalSignsInput } from './create-vital-signs.input';


@InputType()
export class PartialVitalSignsInput extends PartialType(CreateVitalSignsInput) {}

@InputType()
export class UpdateVitalSignsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialVitalSignsInput)  update: PartialVitalSignsInput;

}

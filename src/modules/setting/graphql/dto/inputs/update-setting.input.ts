import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateSettingInput } from './create-setting.input';


@InputType()
export class PartialSettingInput extends PartialType(CreateSettingInput) {}

@InputType()
export class UpdateSettingInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialSettingInput)  update: PartialSettingInput;

}

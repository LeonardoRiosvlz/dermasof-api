import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateHabeasDataInput } from './create-habeas-data.input';


@InputType()
export class PartialHabeasDataInput extends PartialType(CreateHabeasDataInput) {}

@InputType()
export class UpdateHabeasDataInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialHabeasDataInput)  update: PartialHabeasDataInput;

}

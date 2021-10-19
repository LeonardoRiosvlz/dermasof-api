import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateUserAreaInput } from './create-user-area.input';


@InputType()
export class PartialUserAreaInput extends PartialType(CreateUserAreaInput) {}

@InputType()
export class UpdateUserAreaInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialUserAreaInput)  update: PartialUserAreaInput;

}

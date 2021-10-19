import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateUserPositionInput } from './create-user-position.input';


@InputType()
export class PartialUserPositionInput extends PartialType(CreateUserPositionInput) {}

@InputType()
export class UpdateUserPositionInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialUserPositionInput)  update: PartialUserPositionInput;

}

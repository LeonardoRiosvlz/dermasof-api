import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFloorInput } from './create-floor.input';


@InputType()
export class PartialFloorInput extends PartialType(CreateFloorInput) {}

@InputType()
export class UpdateFloorInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFloorInput)  update: PartialFloorInput;

}

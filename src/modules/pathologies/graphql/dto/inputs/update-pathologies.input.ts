import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePathologiesInput } from './create-pathologies.input';


@InputType()
export class PartialPathologiesInput extends PartialType(CreatePathologiesInput) {}

@InputType()
export class UpdatePathologiesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPathologiesInput)  update: PartialPathologiesInput;

}

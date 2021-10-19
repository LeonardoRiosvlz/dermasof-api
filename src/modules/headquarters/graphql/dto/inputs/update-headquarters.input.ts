import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateHeadquartersInput } from './create-headquarters.input';


@InputType()
export class PartialHeadquartersInput extends PartialType(CreateHeadquartersInput) {}

@InputType()
export class UpdateHeadquartersInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialHeadquartersInput)  update: PartialHeadquartersInput;

}

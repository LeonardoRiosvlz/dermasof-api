import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateRegionInput } from './create-region.input';


@InputType()
export class PartialRegionInput extends PartialType(CreateRegionInput) {}

@InputType()
export class UpdateRegionInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialRegionInput)  update: PartialRegionInput;

}

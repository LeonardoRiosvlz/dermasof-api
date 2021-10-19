import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateMembershipInput } from './create-membership.input';


@InputType()
export class PartialMembershipInput extends PartialType(CreateMembershipInput) {}

@InputType()
export class UpdateMembershipInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialMembershipInput)  update: PartialMembershipInput;

}

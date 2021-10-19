import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateRoleInput } from './create-role.input';
import { PartialPermitsInput } from './permits.input';


@InputType()
export class PartialRoleInput extends PartialType(OmitType(CreateRoleInput, ['permits'] as const)) {
  @Field(()=>[PartialPermitsInput], {nullable: true}) permits?: Array<PartialPermitsInput>;
}

@InputType()
export class UpdateRoleInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialRoleInput)  update: PartialRoleInput;

}

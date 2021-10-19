import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { PartialProfileInput } from './profile.input';
import { CreateUserInput } from './create-user.input';

@InputType()
export class PartialUserInput extends PartialType(OmitType(CreateUserInput, ['password', 'profile'] as const)) {
  @Field(() => PartialProfileInput, { nullable: true }) profile?: PartialProfileInput;
}


@InputType()
export class UpdateMeInput extends PartialType(OmitType(PartialUserInput, [ 'isAdmin', 'isActive', 'roles', 'email'] as const)) {
}


@InputType()
export class UpdateUserInput {

  @Field(() => ID) entityId: string;
  @Field(() => PartialUserInput) update: PartialUserInput;

}

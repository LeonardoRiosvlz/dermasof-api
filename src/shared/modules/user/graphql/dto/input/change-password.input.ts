import { Field, ID, InputType } from '@nestjs/graphql';
import { IChangePasswordParams } from '../../../cqrs/commands/impl/change-password.command';

@InputType()
export class ChangePasswordInput implements Omit<IChangePasswordParams, 'userId'>{
  @Field(() => String) oldPassword: string;
  @Field(() => ID) newPassword: string;
}

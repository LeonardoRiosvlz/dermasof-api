import { Field, InputType } from '@nestjs/graphql';
import { IResetPasswordParams } from '../../../cqrs/commands/impl/reset-password.command';

@InputType()
export class ResetPasswordInput implements Omit<IResetPasswordParams, 'userId'> {
  @Field()
  password: string;
}

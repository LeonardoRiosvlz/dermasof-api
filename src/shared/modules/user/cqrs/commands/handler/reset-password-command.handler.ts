import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';


import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from 'src/shared/core/class/result';
import { UserService } from '../../../services/user.service';
import { ResetPasswordCommand } from '../impl/reset-password.command';

@CommandHandler(ResetPasswordCommand)
export class ResetPasswordCommandHandler implements ICommandHandler<ResetPasswordCommand> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

  }

  async execute({ request: { userId, password }, contextId }: ResetPasswordCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(UserService, contextId as ContextId);
    return service.resetPassword(userId, password);
  }

}

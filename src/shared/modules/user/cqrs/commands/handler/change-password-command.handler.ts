import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';


import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from 'src/shared/core/class/result';

import { ChangePasswordCommand } from '../impl/change-password.command';
import { UserService } from '../../../services/user.service';

@CommandHandler(ChangePasswordCommand)
export class ChangePasswordCommandHandler implements ICommandHandler<ChangePasswordCommand> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {

  }

  async execute({ request: { userId, newPassword, oldPassword }, contextId }: ChangePasswordCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(UserService, contextId as ContextId);
    return service.changePassword(userId, oldPassword, newPassword);
  }

}

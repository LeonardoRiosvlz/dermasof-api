import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ConfirmUserCommand } from '../impl/confirm-user.command';
import { ContextId, ModuleRef } from '@nestjs/core';
import { JwtAuthService } from '../../../services/JwtAuthService';
import { Result } from 'src/shared/core/class/result';

@CommandHandler(ConfirmUserCommand)
export class ConfirmUserCommandHandler implements ICommandHandler<ConfirmUserCommand> {
  constructor(
    private readonly _moduleRef: ModuleRef) {
  }

  async execute({ request: {email}, contextId }: ConfirmUserCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId);
    return service.confirmUser({ email })
  }
}

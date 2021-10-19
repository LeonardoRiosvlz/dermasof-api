import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { ForgotPasswordCommand } from '../impl/forgot-password.command';
import { Result } from '../../../../../core/class/result';
import { JwtAuthService } from '../../../services/JwtAuthService';

@CommandHandler(ForgotPasswordCommand)
export class ForgotPasswordCommandHandler implements ICommandHandler<ForgotPasswordCommand> {
  constructor(
    private readonly _moduleRef: ModuleRef) {
  }

  async execute({ request, contextId }: ForgotPasswordCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId);
    return service.forgotPassword(request)
  }
}

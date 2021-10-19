import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignUpCommand } from '../impl/sign-up.command';
import { ContextId, ModuleRef } from '@nestjs/core';
import { JwtAuthService } from '../../../services/JwtAuthService';
import { Result } from '../../../../../core/class/result';


@CommandHandler(SignUpCommand)
export class SignUpCommandHandler implements ICommandHandler<SignUpCommand> {
  constructor(
    private readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request, contextId }: SignUpCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId)
    return service.signUp(request)
  }
}

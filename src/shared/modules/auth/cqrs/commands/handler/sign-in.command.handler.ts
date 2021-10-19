import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignInCommand } from '../impl/sign-in.command';
import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from '../../../../../core/class/result';
import { JwtAuthenticated } from '../../../types/jwt-authenticated.type';
import { JwtAuthService } from '../../../services/JwtAuthService';

@CommandHandler(SignInCommand)
export class SignInCommandHandler implements ICommandHandler<SignInCommand> {
  constructor(
    private readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request, contextId }: SignInCommand): Promise<Result<JwtAuthenticated>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId)
    return service.signIn(request);
  }
}

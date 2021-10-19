import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { ValidateUserByJwtQuery } from '../impl/validate-user-by-jwt.query';
import { Result } from 'src/shared/core/class/result';
import { JwtAuthService } from '../../../services/JwtAuthService';
import { AuthUser } from '../../../types/auth-user.type';


@QueryHandler(ValidateUserByJwtQuery)
export class ValidateUserByJwtQueryHandler implements IQueryHandler<ValidateUserByJwtQuery> {
  constructor(
    private readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request, contextId }: ValidateUserByJwtQuery): Promise<Result<AuthUser>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId)
    return service.validateUserByJwtPayload(request);
  }
}

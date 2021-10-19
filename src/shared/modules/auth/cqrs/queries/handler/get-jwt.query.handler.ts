import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { GetJwtQuery } from '../impl/get-jwt.query';
import { JwtAuthService } from '../../../services/JwtAuthService';
import { Result } from 'src/shared/core/class/result';


@QueryHandler(GetJwtQuery)
export class GetJwtQueryHandler implements IQueryHandler<GetJwtQuery> {
  constructor(
    private readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request, contextId }: GetJwtQuery): Promise<Result<string>> {
    const service = await this._moduleRef.resolve(JwtAuthService, contextId as ContextId)
    return service.getJwt(request)
  }
}

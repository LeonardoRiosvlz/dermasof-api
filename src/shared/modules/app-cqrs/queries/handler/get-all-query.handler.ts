import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';
import { GetAllQuery } from '../impl/get-all.query';

@QueryHandler(GetAllQuery)
export class GetAllQueryHandler<E extends IEntity> implements IQueryHandler<GetAllQuery<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string,
  ) {
  }

  async execute({ request, contextId, connection  }: GetAllQuery<E>): Promise<Result<Array<E>>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    if (connection) {
      service.passConnection2Repo(connection);
    }
    return service.getAll(request?.where, request?.orderBy);
  }
}

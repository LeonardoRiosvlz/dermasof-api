import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';
import { GetOneQuery } from '../impl/get-one.query';

@QueryHandler(GetOneQuery)
export class GetOneQueryHandler<E extends IEntity> implements IQueryHandler<GetOneQuery<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string,
  ) {
  }

  async execute({ request, contextId, connection }: GetOneQuery<E>): Promise<Result<E>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;

    if (connection) {
      service.passConnection2Repo(connection);
    }
    return service.findOne(request?.where);
  }
}

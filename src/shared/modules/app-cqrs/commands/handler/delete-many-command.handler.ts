import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommand } from '../impl/delete-many.command';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';

@CommandHandler(DeleteManyCommand)
export class DeleteManyCommandHandler<E extends IEntity> implements ICommandHandler<DeleteManyCommand<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string,
  ) {
  }

  async execute({ request, contextId }: DeleteManyCommand<any>): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    return service.deleteMany(request?.where);
  }
}

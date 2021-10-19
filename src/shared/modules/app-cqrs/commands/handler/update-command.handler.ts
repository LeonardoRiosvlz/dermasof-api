import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommand } from '../impl/update.command';
import { IEntity } from 'src/shared/core/interfaces/IEntity';
import { IEntityService } from 'src/shared/core/interfaces/IEntityService';

@CommandHandler(UpdateCommand)
export class UpdateCommandHandler<E extends IEntity> implements ICommandHandler<UpdateCommand<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string
  ) {
  }

  async execute({ request: {entityId, update} , contextId}: UpdateCommand<E>): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    return service.updateById(entityId, update);
  }
}

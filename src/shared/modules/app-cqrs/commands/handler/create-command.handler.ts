import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/core/class/result';
import { ModuleRef } from '@nestjs/core';
import { CreateCommand } from '../impl/create.command';
import { IEntity } from '../../../../core/interfaces/IEntity';
import { IEntityService } from '../../../../core/interfaces/IEntityService';

@CommandHandler(CreateCommand)
export class CreateCommandHandler<E extends IEntity> implements ICommandHandler<CreateCommand<E>> {
  constructor(
    readonly _moduleRef: ModuleRef,
    readonly serviceSymbol: string
  ) {
  }

  async execute({ request, contextId }: CreateCommand<E>): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(this.serviceSymbol, contextId as any) as IEntityService<E>;
    return service.create(request);
  }
}

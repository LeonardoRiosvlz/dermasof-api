import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { SetDefaultDataCommand } from '../impl/set-default-data.command';
import { ContextId, ModuleRef } from '@nestjs/core';
import { FixtureService } from '../../../services/fixture.service';

@CommandHandler(SetDefaultDataCommand)
export class SetDefaultDataCommandHandler implements ICommandHandler<SetDefaultDataCommand> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
  }

  async execute({ request: { tenant }, contextId }: SetDefaultDataCommand): Promise<void> {
    const service = await this._moduleRef.resolve(FixtureService, contextId as ContextId);
    await service.setTenantData(tenant);
  }

}

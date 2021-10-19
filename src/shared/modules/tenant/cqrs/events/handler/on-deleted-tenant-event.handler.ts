import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { OnDeletedTenantEvent } from '../impl/on-deleted-tenant-event';
import { IAppTenantConnectionService, TenantConnectionService } from '../../../services/tenant.connection.service';
import { Logger } from '@nestjs/common';
import { AppError } from 'src/shared/core/errors/AppError';


@EventsHandler(OnDeletedTenantEvent)
export class OnDeletedTenantEventHandler implements IEventHandler<OnDeletedTenantEvent> {
  constructor(
    private _moduleRef: ModuleRef,
  ) {

  }

  async handle({ request, contextId }: OnDeletedTenantEvent) {
    try {
      const tenantService = await this._moduleRef.resolve(IAppTenantConnectionService.$, contextId as ContextId, { strict: false }) as TenantConnectionService;
      const dropOrErr = await tenantService.dropTenantDb(request);
      if (dropOrErr.isFailure) {
        Logger.error(dropOrErr.unwrapError().message, OnDeletedTenantEventHandler.name);
      }
      Logger.debug(`Drop Database: ${tenantService.getDbName(request)}`, OnDeletedTenantEventHandler.name);
    } catch (err) {
      Logger.error(new AppError.UnexpectedError(err).message, OnDeletedTenantEventHandler.name);

    }
  }

}

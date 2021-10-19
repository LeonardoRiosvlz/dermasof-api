import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { OnCreatedTenantEvent } from '../impl/on-created-tenant-event';
import { first} from 'lodash';
import { IAppCQRSBus } from '../../../../app-cqrs/interfaces/IAppCQRSBus';
import { AppCQRSBus } from '../../../../app-cqrs/services/AppCQRSBus';
import { SetDefaultDataCommand } from '../../../../fixtures/cqrs/commands/impl/set-default-data.command';
import { CreateUserCommand } from '../../../../user/cqrs/commands/impl/create-user.command';
import { UniqueEntityID } from '../../../../data-access/mongoose/UniqueEntityID';


@EventsHandler(OnCreatedTenantEvent)
export class OnCreatedTenantEventHandler implements IEventHandler<OnCreatedTenantEvent> {
  constructor(
    private _moduleRef: ModuleRef,
  ) {

  }

  async handle({ request, contextId }: OnCreatedTenantEvent) {

    const cqrsBus = await this._moduleRef.resolve(IAppCQRSBus.$, contextId as ContextId, { strict: false }) as AppCQRSBus;
    await cqrsBus.execCommand(new SetDefaultDataCommand({ tenant: request }));

    if (request.info && request.info.responsible) {

      await cqrsBus.execCommand(new CreateUserCommand({
        id: new UniqueEntityID().toString(),
        email: request.info.responsible.email,
        firstname: request.info.responsible.firstname,
        lastname: request.info.responsible.lastname,
        verified: false,
        isActive: true,
        isAdmin: true,
        username: first(request.info.responsible.email.split('@')),
        password: 'Admin@123',
        roles: [],
        profile: {
          phoneNumber: request.info.responsible.phoneNumber,
        },
      }));

    }
  }


}

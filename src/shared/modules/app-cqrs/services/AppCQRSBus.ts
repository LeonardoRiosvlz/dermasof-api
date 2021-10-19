import { IAppCQRSBus } from '../interfaces/IAppCQRSBus';
import { CqrsInterfaces } from '../interfaces/cqrs-interfaces';
import { IAppQuery, IAppEvent, IAppCommand } from '../interfaces/cqrs-interfaces';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { ContextId, ContextIdFactory, REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class AppCQRSBus implements IAppCQRSBus {
  contextId: ContextId;
  constructor(private readonly _commandBus: CommandBus,
              private readonly _queryBus: QueryBus,
              private readonly _eventBus: EventBus,
              @Inject(REQUEST) private readonly _request: Request) {
    this.contextId = ContextIdFactory.getByRequest(this._request);
  }


  getRequest(): Request {
    return this._request
  }

  async execCommand<R>(command: IAppCommand): Promise<R> {
    command.setContextId(this.getContextId());
    return this._commandBus.execute<CqrsInterfaces>(command);
  }

  async execQuery<R>(query: IAppQuery): Promise<R> {
    query.setContextId(this.getContextId());
    return this._queryBus.execute<IAppQuery, R>(query);

  }

  async publishEvent(event: IAppEvent): Promise<unknown> {
    event.setContextId(this.getContextId());
    return this._eventBus.publish(event);

  }

  getContextId(): ContextId {
    return this.contextId;
  }

  setContextId(contextId: ContextId): void {
    this.contextId = contextId;
  }
}
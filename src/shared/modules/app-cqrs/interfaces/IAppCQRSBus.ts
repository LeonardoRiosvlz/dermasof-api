import { IAppCommand, IAppEvent, IAppQuery } from './cqrs-interfaces';
import { Request } from 'express';

export interface IAppCQRSBus {
  contextId: unknown;

  execQuery<R>(query: IAppQuery): R | Promise<R>;

  execCommand<R>(command: IAppCommand): R | Promise<R>;

  publishEvent(event: IAppEvent): unknown | Promise<unknown>;

  getContextId(): unknown | Promise<unknown>;

  setContextId(contextId: unknown): void | Promise<void>;

  getRequest(): Request;
}

export namespace IAppCQRSBus {
  export const $ = Symbol('IAppCQRSBus');
}
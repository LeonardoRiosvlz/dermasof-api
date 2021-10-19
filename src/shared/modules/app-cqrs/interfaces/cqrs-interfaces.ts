import { ICommand, IQuery, IEvent } from '@nestjs/cqrs';

export interface CqrsInterfaces {
  contextId?: unknown;
  setContextId(contextId: unknown): void | Promise<void>
}

export type IAppCommand = CqrsInterfaces & ICommand ;
export type IAppQuery = CqrsInterfaces & IQuery ;
export type IAppEvent = CqrsInterfaces & IEvent;



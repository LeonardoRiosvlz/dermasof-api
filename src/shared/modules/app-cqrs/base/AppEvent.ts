import { IAppEvent } from '../interfaces/cqrs-interfaces';

export class AppEvent implements IAppEvent {
  contextId: unknown;
  setContextId(contextId: unknown): void {
    this.contextId = contextId
  }
}
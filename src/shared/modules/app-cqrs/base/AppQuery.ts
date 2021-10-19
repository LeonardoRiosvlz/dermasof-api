import { IAppQuery } from '../interfaces/cqrs-interfaces';

export class AppQuery implements IAppQuery {
  contextId: unknown;
  setContextId(contextId: unknown): void {
    this.contextId = contextId
  }
}
import { IAppCommand } from '../interfaces/cqrs-interfaces';

export class AppCommand implements IAppCommand {
  contextId: unknown;
  setContextId(contextId: unknown): void {
    this.contextId = contextId
  }
}
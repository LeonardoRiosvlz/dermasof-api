import { Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';
import { IResultError } from '../../../core/interfaces/IResultError';

export abstract class BaseResolver {
  protected _logger: Logger;
  constructor() {
    this._logger = new Logger(this.constructor.name);
  }

  protected handleErrors(resultError: IResultError, lang?: string): void {
    const error = new ApolloError(resultError.translatedMessage(lang), resultError.name);
    Object.defineProperty(error, 'name', { value: resultError.name });
    throw error;
  }
}

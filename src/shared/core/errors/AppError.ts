import { BaseError } from '../class/base.error';
import * as en from './i18n/en.json';
import * as es from './i18n/es.json';

/**
 * @desc General application errors (few of these as possible)
 * @http 500
 */
export namespace AppError {
  const _context = 'AppError';
  const messagesProvider = {
    en, es,
  }
  export class UnexpectedError extends BaseError {
    public constructor(readonly error?: Error) {
      super({
        name: 'UnexpectedError',
        context: _context,
        internationalization: {
          variables: {error: error?.message},
          messagesProvider,
        }
      });
    }
  }


  export class TransactionalError extends BaseError {
    private readonly _brand?: TransactionalError;
    public constructor() {
      super({
        name: 'TransactionalError',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider,
        }
      });
    }
  }


  export class ValidationError extends BaseError {
    private readonly _brand?: ValidationError;
    public constructor(message: string) {
      super({
        name: 'ValidationError',
        context: _context,
        internationalization: {
          variables: {message},
          messagesProvider,
        }
      });
    }
  }


  export class EntityDoesNotExistError extends BaseError {
    private readonly _brand?: ValidationError;
    public constructor(entity: string, id: string) {
      super({
        name: 'EntityDoesNotExistError',
        context: _context,
        internationalization: {
          variables: {entity, id},
          messagesProvider,
        }
      });
    }
  }

  export class EntityConditionDoesNotShowResults extends BaseError {
    public constructor(entity: string) {
      super({
        name: 'EntityConditionDoesNotShowResults',
        context: _context,
        internationalization: {
          variables: {entity},
          messagesProvider,
        }
      });
    }
  }
}

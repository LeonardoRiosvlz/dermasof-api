import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from '../../../core/class/base.error';

export namespace AuthErrors {
  const _context = 'AuthErrors';
  const messagesProvider = {
    en, es,
  };


  export class WrongPassword extends BaseError {
    constructor() {
      super({
        name: 'WrongPassword',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class InvalidCredentials extends BaseError {
    constructor() {
      super({
        name: 'InvalidCredentials',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class UserNotValidated extends BaseError {
    constructor() {
      super({
        name: 'UserNotValidated',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class UserIsNotActive extends BaseError {
    constructor(identifier: string) {
      super({
        name: 'UserIsNotActive',
        context: _context,
        internationalization: {
          variables: {identifier},
          messagesProvider
        }
      });
    }
  }
  export class UserHasNotPermits extends BaseError {
    constructor(identifier: string) {
      super({
        name: 'UserHasNotPermits',
        context: _context,
        internationalization: {
          variables: {identifier},
          messagesProvider
        }
      });
    }
  }

}

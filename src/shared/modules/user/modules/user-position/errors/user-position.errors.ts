import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace UserPositionErrors {
  const _context = 'UserPositionErrors';
  const messagesProvider = {
    en, es,
  };

  export class UserPositionWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'UserPositionWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class UserPositionFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'UserPositionFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



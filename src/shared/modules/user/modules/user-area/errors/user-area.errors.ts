import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace UserAreaErrors {
  const _context = 'UserAreaErrors';
  const messagesProvider = {
    en, es,
  };

  export class UserAreaWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'UserAreaWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class UserAreaFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'UserAreaFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



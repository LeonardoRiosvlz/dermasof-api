import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace __name__Errors {
  const _context = '__name__Errors';
  const messagesProvider = {
    en, es,
  };

  export class __name__WithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: '__name__WithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class __name__FieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: '__name__FieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



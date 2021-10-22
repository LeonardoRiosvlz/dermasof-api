import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ProductErrors {
  const _context = 'ProductErrors';
  const messagesProvider = {
    en, es,
  };

  export class ProductWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ProductWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ProductFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ProductFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



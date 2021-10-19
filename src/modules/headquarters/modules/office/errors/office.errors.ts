import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace OfficeErrors {
  const _context = 'OfficeErrors';
  const messagesProvider = {
    en, es,
  };

  export class OfficeWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'OfficeWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class OfficeFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'OfficeFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



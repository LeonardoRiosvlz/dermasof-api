import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace HeadquartersErrors {
  const _context = 'HeadquartersErrors';
  const messagesProvider = {
    en, es,
  };

  export class HeadquartersWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'HeadquartersWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class HeadquartersFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'HeadquartersFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PathologiesErrors {
  const _context = 'PathologiesErrors';
  const messagesProvider = {
    en, es,
  };

  export class PathologiesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PathologiesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PathologiesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PathologiesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



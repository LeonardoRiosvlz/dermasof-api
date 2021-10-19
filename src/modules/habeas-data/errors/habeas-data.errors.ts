import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace HabeasDataErrors {
  const _context = 'HabeasDataErrors';
  const messagesProvider = {
    en, es,
  };

  export class HabeasDataWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'HabeasDataWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class HabeasDataFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'HabeasDataFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



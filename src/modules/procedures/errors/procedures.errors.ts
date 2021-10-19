import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ProceduresErrors {
  const _context = 'ProceduresErrors';
  const messagesProvider = {
    en, es,
  };

  export class ProceduresWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ProceduresWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ProceduresFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ProceduresFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PatientsErrors {
  const _context = 'PatientsErrors';
  const messagesProvider = {
    en, es,
  };

  export class PatientsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PatientsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PatientsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PatientsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



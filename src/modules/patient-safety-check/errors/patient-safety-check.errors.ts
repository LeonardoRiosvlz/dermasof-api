import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PatientSafetyCheckErrors {
  const _context = 'PatientSafetyCheckErrors';
  const messagesProvider = {
    en, es,
  };

  export class PatientSafetyCheckWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PatientSafetyCheckWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PatientSafetyCheckFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PatientSafetyCheckFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



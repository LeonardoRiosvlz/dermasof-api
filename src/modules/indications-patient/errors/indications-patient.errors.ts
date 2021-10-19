import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace IndicationsPatientErrors {
  const _context = 'IndicationsPatientErrors';
  const messagesProvider = {
    en, es,
  };

  export class IndicationsPatientWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'IndicationsPatientWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class IndicationsPatientFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'IndicationsPatientFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



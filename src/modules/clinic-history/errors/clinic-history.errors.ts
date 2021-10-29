import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClinicHistoryErrors {
  const _context = 'ClinicHistoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClinicHistoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClinicHistoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClinicHistoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClinicHistoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



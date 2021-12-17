import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClinicHistoryProcedureErrors {
  const _context = 'ClinicHistoryProcedureErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClinicHistoryProcedureWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClinicHistoryProcedureWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClinicHistoryProcedureFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClinicHistoryProcedureFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



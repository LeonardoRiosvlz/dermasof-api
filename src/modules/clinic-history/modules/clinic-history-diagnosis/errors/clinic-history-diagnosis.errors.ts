import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClinicHistoryDiagnosisErrors {
  const _context = 'ClinicHistoryDiagnosisErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClinicHistoryDiagnosisWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClinicHistoryDiagnosisWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClinicHistoryDiagnosisFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClinicHistoryDiagnosisFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



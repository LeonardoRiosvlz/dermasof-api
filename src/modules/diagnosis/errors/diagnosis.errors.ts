import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DiagnosisErrors {
  const _context = 'DiagnosisErrors';
  const messagesProvider = {
    en, es,
  };

  export class DiagnosisWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DiagnosisWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DiagnosisFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DiagnosisFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



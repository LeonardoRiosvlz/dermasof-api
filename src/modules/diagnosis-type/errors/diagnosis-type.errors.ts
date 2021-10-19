import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DiagnosisTypeErrors {
  const _context = 'DiagnosisTypeErrors';
  const messagesProvider = {
    en, es,
  };

  export class DiagnosisTypeWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DiagnosisTypeWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DiagnosisTypeFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DiagnosisTypeFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



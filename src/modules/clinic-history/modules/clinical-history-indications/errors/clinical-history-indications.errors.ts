import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClinicalHistoryIndicationsErrors {
  const _context = 'ClinicalHistoryIndicationsErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClinicalHistoryIndicationsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClinicalHistoryIndicationsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClinicalHistoryIndicationsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClinicalHistoryIndicationsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



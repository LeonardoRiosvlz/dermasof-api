import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace InformedConsentErrors {
  const _context = 'InformedConsentErrors';
  const messagesProvider = {
    en, es,
  };

  export class InformedConsentWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'InformedConsentWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class InformedConsentFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'InformedConsentFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



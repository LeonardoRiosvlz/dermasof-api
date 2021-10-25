import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace VitalSignsErrors {
  const _context = 'VitalSignsErrors';
  const messagesProvider = {
    en, es,
  };

  export class VitalSignsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'VitalSignsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class VitalSignsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'VitalSignsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



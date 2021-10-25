import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ConsultationTypeErrors {
  const _context = 'ConsultationTypeErrors';
  const messagesProvider = {
    en, es,
  };

  export class ConsultationTypeWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ConsultationTypeWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ConsultationTypeFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ConsultationTypeFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



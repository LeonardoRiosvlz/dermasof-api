import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace AppointmentsErrors {
  const _context = 'AppointmentsErrors';
  const messagesProvider = {
    en, es,
  };

  export class AppointmentsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'AppointmentsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class AppointmentsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'AppointmentsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace NotificationErrors {
  const _context = 'NotificationErrors';
  const messagesProvider = {
    en, es,
  };

  export class NotificationWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'NotificationWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class NotificationFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'NotificationFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



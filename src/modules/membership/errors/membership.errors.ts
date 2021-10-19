import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace MembershipErrors {
  const _context = 'MembershipErrors';
  const messagesProvider = {
    en, es,
  };

  export class MembershipWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'MembershipWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class MembershipFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'MembershipFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



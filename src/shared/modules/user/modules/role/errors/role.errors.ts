import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace RoleErrors {
  const _context = 'RoleErrors';
  const messagesProvider = {
    en, es,
  };

  export class RoleWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'RoleWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }

  export class RoleNameUsed extends BaseError {
    constructor(name: string) {
      super({
        name: 'RoleNameUsed',
        context: _context,
        internationalization: {
          variables: {name},
          messagesProvider
        }
      });
    }
  }


  export class RoleFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'RoleFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



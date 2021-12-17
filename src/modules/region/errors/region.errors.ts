import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace RegionErrors {
  const _context = 'RegionErrors';
  const messagesProvider = {
    en, es,
  };

  export class RegionWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'RegionWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class RegionFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'RegionFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



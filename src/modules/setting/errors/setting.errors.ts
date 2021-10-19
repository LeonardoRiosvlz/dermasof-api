import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace SettingErrors {
  const _context = 'SettingErrors';
  const messagesProvider = {
    en, es,
  };

  export class SettingWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'SettingWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class SettingFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'SettingFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



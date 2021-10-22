import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ServiceErrors {
  const _context = 'ServiceErrors';
  const messagesProvider = {
    en, es,
  };

  export class ServiceWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ServiceWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ServiceFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ServiceFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



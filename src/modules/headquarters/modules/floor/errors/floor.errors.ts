import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FloorErrors {
  const _context = 'FloorErrors';
  const messagesProvider = {
    en, es,
  };

  export class FloorWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FloorWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FloorFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FloorFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



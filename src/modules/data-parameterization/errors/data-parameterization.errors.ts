import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DataParameterizationErrors {
  const _context = 'DataParameterizationErrors';
  const messagesProvider = {
    en, es,
  };

  export class DataParameterizationWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DataParameterizationWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DataParameterizationFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DataParameterizationFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ProductCategoryErrors {
  const _context = 'ProductCategoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class ProductCategoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ProductCategoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ProductCategoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ProductCategoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ServiceCategoryErrors {
  const _context = 'ServiceCategoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class ServiceCategoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ServiceCategoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ServiceCategoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ServiceCategoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



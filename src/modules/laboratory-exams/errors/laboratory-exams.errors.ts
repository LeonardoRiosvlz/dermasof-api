import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace LaboratoryExamsErrors {
  const _context = 'LaboratoryExamsErrors';
  const messagesProvider = {
    en, es,
  };

  export class LaboratoryExamsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'LaboratoryExamsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class LaboratoryExamsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'LaboratoryExamsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



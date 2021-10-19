import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace MedicalSpecialtiesErrors {
  const _context = 'MedicalSpecialtiesErrors';
  const messagesProvider = {
    en, es,
  };

  export class MedicalSpecialtiesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'MedicalSpecialtiesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class MedicalSpecialtiesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'MedicalSpecialtiesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



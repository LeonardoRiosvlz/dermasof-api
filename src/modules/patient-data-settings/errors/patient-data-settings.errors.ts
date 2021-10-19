import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PatientDataSettingsErrors {
  const _context = 'PatientDataSettingsErrors';
  const messagesProvider = {
    en, es,
  };

  export class PatientDataSettingsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PatientDataSettingsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PatientDataSettingsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PatientDataSettingsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



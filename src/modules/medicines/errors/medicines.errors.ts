import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace MedicinesErrors {
  const _context = 'MedicinesErrors';
  const messagesProvider = {
    en, es,
  };

  export class MedicinesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'MedicinesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class MedicinesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'MedicinesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



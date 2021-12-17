import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace PhotographicReportErrors {
  const _context = 'PhotographicReportErrors';
  const messagesProvider = {
    en, es,
  };

  export class PhotographicReportWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'PhotographicReportWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class PhotographicReportFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PhotographicReportFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesPhotographicReportErrors {
  const _context = 'FilesPhotographicReportErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesPhotographicReportWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesPhotographicReportWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesPhotographicReportFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesPhotographicReportFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



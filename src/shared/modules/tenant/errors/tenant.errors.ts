import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';


export namespace TenantErrors {
  const _context = 'TenantErrors';
  const messagesProvider = {
    en, es,
  };

  export class TenantDoesNotExist extends BaseError {
    constructor(readonly code: string) {
      super({
        name: 'TenantDoesNotExist',
        context: _context,
        internationalization: {
          variables: {code},
          messagesProvider
        }
      });
    }
  }



  export class TenantNameUsed extends BaseError {
    constructor(name: string) {
      super({
        name: 'TenantNameUsed',
        context: _context,
        internationalization: {
          variables: {name},
          messagesProvider
        }
      });
    }
  }


  export class TenantCodeUsed extends BaseError {
    constructor(code: string) {
      super({
        name: 'TenantCodeUsed',
        context: _context,
        internationalization: {
          variables: {code},
          messagesProvider
        }
      });
    }
  }



  export class InvalidTenantCode extends BaseError {
    constructor(code: string) {
      super({
        name: 'InvalidTenantCode',
        context: _context,
        internationalization: {
          variables: {code},
          messagesProvider
        }
      });
    }
  }

  export class NoTenantConnection extends BaseError {
    constructor(code: string) {
      super({
        name: 'NoTenantConnection',
        context: _context,
        internationalization: {
          variables: {code},
          messagesProvider
        }
      });
    }
  }

}

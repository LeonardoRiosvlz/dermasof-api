import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from '../../../core/class/base.error';

export namespace UserErrors {
  const _context = 'UserErrors';
  const messagesProvider = {
    en, es,
  };

  export class UserWithEmailDoesNotExist extends BaseError {
    constructor(readonly email: string) {
      super({
        name: 'UserWithEmailDoesNotExist',
        context: _context,
        internationalization: {
          variables: {email},
          messagesProvider
        }
      });
    }
  }


  export class UserDoesntExist extends BaseError {
    constructor() {
      super({
        name: 'UserDoesntExist',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class UserWithIdDoesntExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'UserWithIdDoesntExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class WrongPassword extends BaseError {
    constructor() {
      super({
        name: 'WrongPassword',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }
  export class EmailExistError extends BaseError {
    constructor(email: string) {
      super({
        name: 'EmailExistError',
        context: _context,
        internationalization: {
          variables: {email},
          messagesProvider
        }
      });
    }
  }


  export class InvalidCredentials extends BaseError {
    constructor() {
      super({
        name: 'InvalidCredentials',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }


  export class FieldRequired extends BaseError {
    constructor(field: string) {
      super({
        name: 'FieldRequired',
        context: _context,
        internationalization: {
          variables: {field},
          messagesProvider
        }
      });
    }
  }


  export class InvalidEmail extends BaseError {
    constructor() {
      super({
        name: 'InvalidEmail',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }


  export class EmailUsed extends BaseError {
    constructor() {
      super({
        name: 'EmailUsed',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class PasswordsDoNotMatch extends BaseError {
    constructor() {
      super({
        name: 'PasswordsDoNotMatch',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }


  export class EmailOrUserNameUsed extends BaseError {
    constructor() {
      super({
        name: 'EmailOrUserNameUsed',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }


  export class UserNotValidated extends BaseError {
    constructor() {
      super({
        name: 'UserNotValidated',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }



  export class UserIsNotInstructor extends BaseError {
    constructor() {
      super({
        name: 'UserIsNotInstructor',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }



  export class UserIsNotStudent extends BaseError {
    constructor() {
      super({
        name: 'UserIsNotStudent',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class UserCannotBeRegistered extends BaseError {
    constructor() {
      super({
        name: 'UserCannotBeRegistered',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class UserWithoutRoles extends BaseError {
    constructor(identifier: string) {
      super({
        name: 'UserWithoutRoles',
        context: _context,
        internationalization: {
          variables: {identifier},
          messagesProvider
        }
      });
    }
  }
}

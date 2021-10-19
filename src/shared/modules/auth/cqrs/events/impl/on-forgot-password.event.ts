import { AppEvent } from '../../../../app-cqrs/base/AppEvent';
import { APP_LANG } from '../../../../../resources/lang.type';


export class OnForgotPasswordEvent extends AppEvent {
  constructor(public request: {
                email: string,
                lang: APP_LANG,
                displayName: string,
                url: string,
              },
  ) {
    super();
  }
}

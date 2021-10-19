import { I18nMessage } from '../modules/notification/interfaces/IAppNotificationService';
import { APP_LANG } from '../resources/lang.type';

export class I18nUtils {

  static extractMessage(message: I18nMessage, lang?: APP_LANG): string {
    lang = lang ? lang : 'en';
    return message[lang];
  }

}
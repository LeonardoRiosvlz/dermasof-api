import { APP_LANG } from '../../../resources/lang.type';

export type ForgotPasswordDto = {
  email: string;
  redirectTo: string;
  lang?: APP_LANG;
}

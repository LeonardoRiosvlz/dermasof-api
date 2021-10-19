import { IMailData } from './IMailData';
import { APP_LANG } from 'src/shared/resources/lang.type';



export type TemplateLang = APP_LANG

export interface ITemplate<Props> {
  name: string;
  getEmailTmpl(props: Props, lang: TemplateLang): IMailData;
  getTextTmpl(props: Props, lang?: TemplateLang): string;
}
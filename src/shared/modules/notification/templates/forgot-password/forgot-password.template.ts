import { ITemplate, TemplateLang } from '../../interfaces/ITemplate';
import { IMailData } from '../../interfaces/IMailData';

export const FORGOT_PASSWORD_TEMPLATE = 'FORGOT_PASSWORD_TEMPLATE';
export type ForgotPasswordTemplateProps = {
  url: string
  displayName: string;
}

class ForgotPasswordTemplate implements ITemplate<ForgotPasswordTemplateProps> {
  name: string = FORGOT_PASSWORD_TEMPLATE;

  getEmailTmpl({ displayName, url }: ForgotPasswordTemplateProps, lang: TemplateLang): IMailData {
    switch (lang) {
      case 'en':
        return {
          subject: 'Lost Password',
          title: 'Important!',
          subtitle: 'Lost Password',
          body: `<p style="text-align: justify;  word-wrap: break-word;"> Dear user: <strong>${displayName}</strong>,we have found 
                  out that you lost your password, to recover it, follow the instructions in the following link:
                  <br />
                    <a href="${url}" target="_blank">Recovery</a>
                   <br />
                   <br />
                 Thank you for being part of us. </p>`,
        };

      case 'es':
        return {
          subject: 'Pérdida de contraseña',
          title: 'Importante',
          subtitle: 'Pérdida de contraseña',
          body: `<p style="text-align: justify;  word-wrap: break-word;"> Estimado usuario: <strong>${displayName}</strong>, nos hemos enterado
                        de que ha perdido su contraseña. Para recuperarla debe seguir las instrucciones del siguiente link:
                         <br />
                    <a href="${url}" target="_blank">Recuperar</a>
                   <br />
                   <br />
                     Gracias por se parte de nosotros.</p>`,
        };
    }

  }

  getTextTmpl(props: ForgotPasswordTemplateProps, lang?: TemplateLang): string {
    throw new Error('Implements me!');
  }

}

const forgotPasswordTemplate = new ForgotPasswordTemplate();
export { forgotPasswordTemplate };
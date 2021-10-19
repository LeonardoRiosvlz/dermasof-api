import { ITemplate, TemplateLang } from '../../interfaces/ITemplate';
import { IMailData } from '../../interfaces/IMailData';

export const VALIDATE_USER_TEMPLATE = 'VALIDATE_USER_TEMPLATE';
export type ValidateUserTemplateProps =  {
  displayName: string;
  url: string
}

class ValidateUserTemplate implements ITemplate<ValidateUserTemplateProps> {
  name: string = VALIDATE_USER_TEMPLATE;

  getEmailTmpl({ displayName, url }: ValidateUserTemplateProps, lang: TemplateLang): IMailData {
    switch (lang) {
      case 'en':
        return {
          subject: 'User validation',
          title: 'Welcome User!',
          subtitle: 'Welcome to our system',
          body: `<p style="text-align: justify;  word-wrap: break-word;"> Dear user: <strong>${displayName}</strong>, you are 
                   one step away from being part of us, please validate your registration using the following link:
                  <br />
                  <br />
                   <a href="${url}" style="word-wrap: break-word;" target="_blank"><strong style="font-size: 24px;">Validate</strong></a>
                         
                   <br />
                   <br />
                 Thank you for being part of us. </p>`,
        };

      case 'es':
        return {
          subject: 'Validación de Usuario',
          title: 'Validación de usuario',
          subtitle: 'Bienvenido a nuestro sistema',
          body: `<p style="text-align: justify;  word-wrap: break-word;"> Estimado usuario: <strong>${displayName}</strong>, está a un paso de ser
                    parte de nosotros, por favor valide su cuenta utilizando el siguiente link:
                         <br />
                         <br />
                                <a href="${url}" style="word-wrap: break-word;" target="_blank"><strong style="font-size: 24px;">Validar</strong></a>
                   <br />
                   <br />
                     Gracias por se parte de nosotros.</p>`,
        };
    }

  }


  getTextTmpl(props: ValidateUserTemplateProps, lang?: TemplateLang): string {
    throw new Error('Implements me!');
  }

}

const validateUserTemplate = new ValidateUserTemplate();
export {validateUserTemplate}
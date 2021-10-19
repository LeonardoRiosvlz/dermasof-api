import { IAppMailService } from '../interfaces/IAppMailService';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { IMailData } from '../interfaces/IMailData';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import {
  TEMPLATE_COLOR as TEMPLATE_COLOR,
  TEMPLATE_FOOTER_TEXT as TEMPLATE_FOOTER_TEXT,
  TEMPLATE_LOGO_URL as TEMPLATE_LOGO_URL,
  TEMPLATE_APP_LINK as TEMPLATE_APP_LINK
} from '../resources/template.constants';

@Injectable()
export class AppMailService implements IAppMailService {
  logger: Logger;

  constructor(private readonly  _mailerService: MailerService) {
    this.logger = new Logger(AppMailService.name);

  }

  send(to: string, { subject, subtitle, body, title }: IMailData): Promise<Result<void>> {
    return new Promise((resolve, reject) => {
      this._mailerService
        .sendMail({
          to,
          subject,
          template: './generic-email',
          context: { TEMPLATE_LOGO_URL, TEMPLATE_COLOR, TEMPLATE_FOOTER_TEXT, TEMPLATE_APP_LINK, subtitle, body, title },
        })
        .then(() => {
          Logger.debug(
            `New mail sent to: ${to}`,
          );
          resolve(Result.Ok());
        })
        .catch(e => {
          Logger.error(e.toString());
          reject(Result.Fail(new AppError.UnexpectedError(e)));
        });
    });


  }

}
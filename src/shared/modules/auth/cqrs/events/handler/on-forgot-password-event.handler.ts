import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ModuleRef } from '@nestjs/core';

import { AppMailService } from '../../../../notification/services/app-mail.service';

import { OnForgotPasswordEvent } from '../impl/on-forgot-password.event';
import { forgotPasswordTemplate } from 'src/shared/modules/notification/templates/forgot-password/forgot-password.template';


@EventsHandler(OnForgotPasswordEvent)
export class OnForgotPasswordEventHandler implements IEventHandler<OnForgotPasswordEvent> {
  constructor(
    private _moduleRef: ModuleRef,
  ) {

  }

  async handle({ request: { displayName, email, lang, url }, contextId }: OnForgotPasswordEvent) {
    const mailService = await this._moduleRef.create(AppMailService);

    await mailService.send(email, forgotPasswordTemplate.getEmailTmpl({
      displayName,
      url,
    }, lang));


  }


}

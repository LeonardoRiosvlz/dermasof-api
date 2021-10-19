import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from 'src/shared/core/class/result';
import { OnCreatedUserEvent } from '../impl/on-created-user-event';
import { AppMailService } from '../../../../notification/services/app-mail.service';
import { validateUserTemplate } from '../../../../notification/templates/validate-user/validate-user.template';
import { AppConfigService } from '../../../../config/service/app-config-service';
import { LANG_REQUEST } from '../../../../app-lang/providers/lang.providers';
import { IAppCQRSBus } from '../../../../app-cqrs/interfaces/IAppCQRSBus';
import { GetJwtQuery } from '../../../../auth/cqrs/queries/impl/get-jwt.query';
import { AppCQRSBus } from '../../../../app-cqrs/services/AppCQRSBus';


@EventsHandler(OnCreatedUserEvent)
export class OnCreatedUserEventHandler implements IEventHandler<OnCreatedUserEvent> {
  constructor(
    private _moduleRef: ModuleRef,

  ) {

  }

  async handle({ request, contextId }: OnCreatedUserEvent) {
    const appConfigService = await this._moduleRef.create(AppConfigService);
    const mailService = await this._moduleRef.create(AppMailService);
    const cqrsBus = await this._moduleRef.resolve(IAppCQRSBus.$, contextId as ContextId, { strict: false }) as AppCQRSBus
    const appLang = await this._moduleRef.resolve(LANG_REQUEST, contextId as ContextId, { strict: false });

    const jwtTokenOrErr = await cqrsBus.execQuery<Result<string>>(new GetJwtQuery(request));
    if (jwtTokenOrErr.isSuccess) {
      const url = `${appConfigService.app.frontDomain}${appConfigService.smtp.emailValidationUrl}?token=${jwtTokenOrErr.unwrap()}`;
      await mailService.send(request.email, validateUserTemplate.getEmailTmpl({
        displayName: `${request.firstname} ${request.lastname ?? ''}`,
        url: url,
      }, appLang));
    }

  }


}

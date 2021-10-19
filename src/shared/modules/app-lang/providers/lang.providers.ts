import { REQUEST } from '@nestjs/core';
import { Scope, Provider } from '@nestjs/common';
import { IncomingMessage } from 'http';

import { LangRequest } from '../types/lang-request.type';
import { ITenantRequest } from '../../../core/interfaces/ITenantRequest';
import { APP_LANG } from '../../../resources/lang.type';

export const LANG_REQUEST = 'LANG_REQUEST';

export const langProviders: Provider[] = [
  {
    provide: LANG_REQUEST,
    scope: Scope.REQUEST,
    inject: [REQUEST],
    useFactory: (request: ITenantRequest): APP_LANG => {

      let lang: APP_LANG = 'es'

      if(request?.lang !== undefined){
        lang = request.lang as APP_LANG
      } else if(request?.req && request.req?.lang) {

        lang = request.req.lang as APP_LANG
      }
      return lang
    },
  },
];

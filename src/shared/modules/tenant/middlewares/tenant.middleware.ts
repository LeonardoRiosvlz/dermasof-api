import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { IncomingMessage } from 'http';
import { ITenantRequest } from 'src/shared/core/interfaces/ITenantRequest';
import { APP_LANG } from '../../../resources/lang.type';
import { LangRequest } from '../../app-lang/types/lang-request.type';

@Injectable()
export class TenantMiddleware implements NestMiddleware {

  constructor(private readonly _appConfigService: AppConfigService) {
  }


  private extractLang(request: any): APP_LANG {
    let lang: LangRequest = 'es';
    if (!request) {
      return lang;
    }
    try {
      if (request instanceof IncomingMessage && request.headers) {
        lang = request.headers['lang'] ? request.headers['lang'] as LangRequest : lang;
      } else if (request.req && request.req.connectionParams) {
        const { req } = request;
        lang = req.connectionParams['lang'] ? req.connectionParams['lang'] as LangRequest : lang;
      } else if (request.req) {
        const { req } = request;
        lang = req.headers['lang'] ? req.headers['lang'] as LangRequest : lang;
      }
      return lang;
    } catch (err) {
      return lang;
    }
  }

  private extractTenantCode(request: any): string | undefined {
    let tenant: string | undefined;
    if (!request) {
      return undefined;
    }
    try {
      if (request instanceof IncomingMessage && request.headers) {
        tenant = request.headers['tenant'] ? String(request.headers['tenant']) : undefined;
      } else if (request.req && request.req.connectionParams) {
        const { req } = request;
        tenant = req.connectionParams['tenant'] ? String(req.connectionParams['tenant']) : undefined;
      } else if (request.req) {
        const { req } = request;
        tenant = req.headers['tenant'] ? String(req.headers['tenant']) : undefined;
      }
      return tenant;
    } catch (err) {
      return undefined;
    }
  }

  async use(request: ITenantRequest, res: Response, next: NextFunction) {

    request.tenant = this.extractTenantCode(request);
    request.lang = this.extractLang(request);
    next();
  }
}




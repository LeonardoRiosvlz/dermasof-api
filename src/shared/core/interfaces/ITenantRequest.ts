import { Request } from 'express';
import { APP_LANG } from '../../resources/lang.type';

export interface ITenantRequest extends Request {
  tenant?: string
  lang: APP_LANG
  req: any
}
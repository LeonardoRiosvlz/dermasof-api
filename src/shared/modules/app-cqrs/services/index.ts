import { Provider, Scope } from '@nestjs/common';
import { IAppCQRSBus } from '../interfaces/IAppCQRSBus';
import { AppCQRSBus } from './AppCQRSBus';

export const AppCQRSProviders: Array<Provider> = [
  {
    scope: Scope.REQUEST,
    provide: IAppCQRSBus.$,
    useClass: AppCQRSBus
  }
]
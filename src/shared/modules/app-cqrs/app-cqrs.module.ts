import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppCQRSProviders } from './services';

@Global()
@Module({
  imports: [
    CqrsModule,
  ],
  providers: [...AppCQRSProviders],
  exports: [CqrsModule, ...AppCQRSProviders],
})
export class AppCqrsModule {
}
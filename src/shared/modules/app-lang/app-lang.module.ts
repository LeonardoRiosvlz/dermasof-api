import { Module } from '@nestjs/common';
import { langProviders } from './providers/lang.providers';

@Module({
  providers: [...langProviders],
  exports: [...langProviders],
})
export class AppLangModule {
}
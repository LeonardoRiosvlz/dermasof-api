import { Module, Global } from '@nestjs/common';
import {AvailableDataAccessModules} from "./available-data-access.modules";
import { AvailableDataAccessProviders } from './availabe-data-access.providers';

@Global()
@Module({
  imports: [
    ...AvailableDataAccessModules
  ],
  providers: [
    ...AvailableDataAccessProviders
  ],
  exports: [
    ...AvailableDataAccessModules,
    ...AvailableDataAccessProviders
  ],
})
export class DataAccessModule {}


import {MongooseModule, MongooseModuleOptions} from "@nestjs/mongoose";
import { MongooseMultiTenantConfigService } from './mongoose-multitenant.service';
import { AppConfigModule } from '../../config/app-config.module';
import { AppConfigService } from '../../config/service/app-config-service';

export const mongooseModule = MongooseModule.forRootAsync({
  imports: [AppConfigModule],
  inject: [AppConfigService],
 // useClass: MongooseMultiTenantConfigService
  useFactory: (config: AppConfigService): (MongooseModuleOptions | Promise<MongooseModuleOptions>) => {
    return {
      uri: config.database.getTenantConnectString(),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      connectionName: config.database.mainDbName,
    } as MongooseModuleOptions;
  },
});

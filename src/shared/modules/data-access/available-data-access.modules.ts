import {mongooseModule} from "./mongoose/mongoose-module";
import { DynamicModule } from '@nestjs/common';

export const AvailableDataAccessModules: Array<DynamicModule> = [
  mongooseModule
];

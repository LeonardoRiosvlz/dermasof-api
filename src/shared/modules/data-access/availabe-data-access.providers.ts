import { Provider } from '@nestjs/common';
import { mongooseProviders } from './mongoose/mongoose.providers';

export const AvailableDataAccessProviders: Array<Provider> = [
  //...mongooseProviders
];

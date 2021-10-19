import { Field, ObjectType } from '@nestjs/graphql';

import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';



@ObjectType()
export class AvailablePermitsResponse {
  @Field(() => APP_MODULES, ) module: APP_MODULES;
  @Field(() => [ACTION_LIST] ) actions: Array<ACTION_LIST>;
}






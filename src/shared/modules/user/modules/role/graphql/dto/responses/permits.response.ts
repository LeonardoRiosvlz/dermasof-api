import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';

registerEnumType(APP_MODULES, {name: 'APP_MODULES'})
registerEnumType(ACTION_LIST, {name: 'ACTION_LIST'})

@ObjectType()
export class PermitsResponse {
  @Field(() => APP_MODULES, ) module: APP_MODULES;
  @Field(() => ACTION_LIST, ) action: ACTION_LIST;
}






import { Field, InputType, PartialType } from '@nestjs/graphql';

import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';


@InputType()
export class PermitsInput {
  @Field(() => APP_MODULES, ) module: APP_MODULES;
  @Field(() => ACTION_LIST, ) action: ACTION_LIST;
}

@InputType()
export class PartialPermitsInput extends PartialType(PermitsInput){ }






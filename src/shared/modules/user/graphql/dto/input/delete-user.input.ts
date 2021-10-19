import { InputType, Field, ID } from '@nestjs/graphql';

import { BaseInput } from 'src/shared/dto/base-input.dto';


@InputType()
export class DeleteUserInput extends BaseInput {
  @Field(() => ID) entityId: string;
}


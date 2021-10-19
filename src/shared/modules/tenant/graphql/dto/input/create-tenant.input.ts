import { InputType, Field } from '@nestjs/graphql';
import { BaseInput } from 'src/shared/dto/base-input.dto';
import { TenantInfoInput } from './tenant-info.input';

@InputType()
export class CreateTenantInput extends BaseInput {
  @Field() code: string;
  @Field() name: string;
  @Field(() => Boolean) isActive: boolean;
  @Field(() => TenantInfoInput, { nullable: true }) info?: TenantInfoInput;

}



import { InputType, PartialType, Field, OmitType, ID } from '@nestjs/graphql';

import { CreateTenantInput } from './create-tenant.input';



@InputType()
export class PartialTenantInput extends PartialType(OmitType(CreateTenantInput, ['code'] as const)) {}


@InputType()
export class UpdateTenantInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialTenantInput)  update: PartialTenantInput;

}

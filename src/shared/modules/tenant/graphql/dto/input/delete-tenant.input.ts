import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class DeleteTenantInput {
  @Field(() => ID, )  entityId: string;
}

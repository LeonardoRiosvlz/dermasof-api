import { Field, InputType } from '@nestjs/graphql';
import { PermitsInput } from './permits.input';

@InputType()
export class CreateRoleInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(()=>[PermitsInput]) permits: Array<PermitsInput>;

}

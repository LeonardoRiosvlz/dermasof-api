import { Field, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { PROVIDER } from '../../../types/sign-in.dto';

registerEnumType(PROVIDER, {name: 'PROVIDER'});

@InputType()
export class SignInInput  {
  @Field()
  unique: string;
  @Field({nullable: true})
  password?: string;
  @Field({nullable: true})
  tokenId?: string;
  @Field(() => PROVIDER, {nullable: true, defaultValue: PROVIDER.LOCAL})
  provider: PROVIDER;
}

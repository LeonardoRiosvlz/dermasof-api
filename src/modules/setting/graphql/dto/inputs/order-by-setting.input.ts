import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderBySettingInput {
  @Field(() => OrderByType, { nullable: true })  email?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  address?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  phoneNumber?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

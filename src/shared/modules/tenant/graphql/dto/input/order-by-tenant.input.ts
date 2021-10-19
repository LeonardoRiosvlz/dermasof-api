import {Field, InputType} from "@nestjs/graphql";
import { OrderByType } from '../../../../graphql/dto/input/orderby-enum.input';

@InputType()
export class OrderByTenantInput  {
  @Field(() => OrderByType, { nullable: true })
  id?: OrderByType;
  @Field(() => OrderByType, { nullable: true })
  updatedAt?: OrderByType;
  @Field(() => OrderByType, { nullable: true })
  createdAt?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  code?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  name?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  email?: OrderByType;

}
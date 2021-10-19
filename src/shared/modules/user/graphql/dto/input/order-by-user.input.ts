import {Field, InputType} from "@nestjs/graphql";
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';
import { BaseInput } from 'src/shared/dto/base-input.dto';

@InputType()
export class OrderByUserInput extends BaseInput {
  @Field(() => OrderByType, { nullable: true })
  id?: OrderByType;
  @Field(() => OrderByType, { nullable: true })
  updatedAt?: OrderByType;
  @Field(() => OrderByType, { nullable: true })
  createdAt?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  email?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  username?: OrderByType;

  @Field(() => OrderByType, { nullable: true })
  firstname?: OrderByType;


  @Field(() => OrderByType, { nullable: true })
  lastname?: OrderByType;


  @Field(() => OrderByType, { nullable: true })
  lastLogin?: OrderByType;

}
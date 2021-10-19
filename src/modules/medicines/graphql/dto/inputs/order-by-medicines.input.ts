import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByMedicinesInput {
  @Field(() => OrderByType, { nullable: true })  code?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  description?: OrderByType;

  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

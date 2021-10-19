import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByUserAreaInput {
  @Field(() => OrderByType, { nullable: true })  name?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  description?: OrderByType;

  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

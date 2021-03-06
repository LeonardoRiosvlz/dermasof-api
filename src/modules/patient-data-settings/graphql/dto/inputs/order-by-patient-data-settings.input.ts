import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByPatientDataSettingsInput {
  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

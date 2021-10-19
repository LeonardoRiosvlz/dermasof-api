import { Field, InputType } from '@nestjs/graphql';
import { OrderByType } from 'src/shared/modules/graphql/dto/input/orderby-enum.input';


@InputType()
export class OrderByDataParameterizationInput {
  @Field(() => OrderByType, { nullable: true })  paymentDeadlines?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  deadlineForPaymentReminder?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  deadlineForAppointmentReminder?: OrderByType;
  @Field(() => OrderByType, { nullable: true })  createdAt?: OrderByType;
}

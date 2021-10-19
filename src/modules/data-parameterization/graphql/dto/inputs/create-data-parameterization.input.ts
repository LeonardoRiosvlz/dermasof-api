import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateDataParameterizationInput {
  @Field(() => Float, )  paymentDeadlines: number;
  @Field(() => Float, )  deadlineForPaymentReminder: number;
  @Field(() => Float, )  deadlineForAppointmentReminder: number;
}

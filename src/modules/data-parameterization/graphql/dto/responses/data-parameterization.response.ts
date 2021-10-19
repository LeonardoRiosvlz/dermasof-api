import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DataParameterizationResponse{
  @Field(() => ID) id: string;
  @Field() paymentDeadlines: number;
  @Field() deadlineForPaymentReminder: number;
  @Field() deadlineForAppointmentReminder: number;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

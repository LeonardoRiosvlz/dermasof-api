import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteAppointmentsInput {
  @Field(() => ID, )  entityId: string;
}

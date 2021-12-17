import { Field, InputType, ID } from '@nestjs/graphql';
import { ModalityType } from 'src/modules/appointments/entities/appointments.entity';

@InputType()
export class CreateAppointmentsInput {
  @Field(() => ID, {nullable: true}) patient: string;
  @Field(() => ModalityType )  modality: ModalityType;
  @Field(() => ID, {nullable: true}) headquarters: string;
  @Field(() => ID, {nullable: true}) consultationType: string;
  @Field(() => ID, {nullable: true}) doctor: string;
  @Field(() => Date , {nullable: true})  date?: Date;
  @Field(() => String, {nullable: true} )  description?: string;
}

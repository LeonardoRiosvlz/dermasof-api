import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateAppointmentsInput } from './create-appointments.input';


@InputType()
export class PartialAppointmentsInput extends PartialType(CreateAppointmentsInput) {}

@InputType()
export class UpdateAppointmentsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialAppointmentsInput)  update: PartialAppointmentsInput;

}

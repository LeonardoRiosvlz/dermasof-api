import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { ModalityType } from 'src/modules/appointments/entities/appointments.entity';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';


registerEnumType(ModalityType, { name: 'ModalityType' });


@ObjectType()
export class AppointmentsResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient: SolvedEntityResponse;
  @Field(() => ModalityType, )  modality: ModalityType;
  @Field(() => SolvedEntityResponse, { nullable: true }) headquarters: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) consultationType: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) doctor: SolvedEntityResponse;
  @Field(() => Date ,{nullable: true})  date?: Date;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

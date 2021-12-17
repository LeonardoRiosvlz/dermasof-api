import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { HeadquartersEntity } from 'src/modules/headquarters/entities/headquarters.entity';
import { ConsultationTypeEntity } from 'src/modules/consultation-type/entities/consultation-type.entity';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';

export enum ModalityType{
  TELECONSULTATION = 'TELECONSULTATION',
  PRESENTIAL='PRESENTIAL',
  DOMICILIARY='DOMICILIARY',
}

@Schema({ ...SchemaConstants, collection: 'appointments' })
export class AppointmentsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientsEntity}) patient: string;
  @Prop({type:String}) modality: ModalityType;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => HeadquartersEntity}) headquarters: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ConsultationTypeEntity}) consultationType: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserEntity}) doctor: string;
  @Prop() date?: Date;
  @Prop() description?: string;
}

export const AppointmentsSchema = SchemaFactory.createForClass(AppointmentsEntity);

export const AppointmentsFeature = {
  name: AppointmentsEntity.name,
  schema: AppointmentsSchema,
};

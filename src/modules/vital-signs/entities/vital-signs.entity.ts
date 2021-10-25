import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { ConsultationTypeEntity } from 'src/modules/consultation-type/entities/consultation-type.entity';

@Schema({ ...SchemaConstants, collection: 'vital-signs' })
export class VitalSignsEntity extends PersistentEntity {
  @Prop() heartRate: number;
  @Prop() breathingFrequency: number;
  @Prop() weight: number;
  @Prop() bloodPressure: number;
  @Prop() temperature: number;
  @Prop() saturation: number;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientsEntity}) patient: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ConsultationTypeEntity}) consultationType: string;
  @Prop() description?: string;
}

export const VitalSignsSchema = SchemaFactory.createForClass(VitalSignsEntity);

export const VitalSignsFeature = {
  name: VitalSignsEntity.name,
  schema: VitalSignsSchema,
};

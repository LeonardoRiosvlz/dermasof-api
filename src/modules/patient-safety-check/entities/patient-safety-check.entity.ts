import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'patient-safety-check' })
export class PatientSafetyCheckEntity extends PersistentEntity {
  @Prop() description: string;
  @Prop() isActive?: boolean;
}

export const PatientSafetyCheckSchema = SchemaFactory.createForClass(PatientSafetyCheckEntity);

export const PatientSafetyCheckFeature = {
  name: PatientSafetyCheckEntity.name,
  schema: PatientSafetyCheckSchema,
};

import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'indications-patient' })
export class IndicationsPatientEntity extends PersistentEntity {

  @Prop() description: string;
  @Prop() isActive?: boolean;
}

export const IndicationsPatientSchema = SchemaFactory.createForClass(IndicationsPatientEntity);

export const IndicationsPatientFeature = {
  name: IndicationsPatientEntity.name,
  schema: IndicationsPatientSchema,
};

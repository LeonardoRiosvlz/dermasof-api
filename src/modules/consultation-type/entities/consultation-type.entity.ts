import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'consultation-type' })
export class ConsultationTypeEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const ConsultationTypeSchema = SchemaFactory.createForClass(ConsultationTypeEntity);

export const ConsultationTypeFeature = {
  name: ConsultationTypeEntity.name,
  schema: ConsultationTypeSchema,
};

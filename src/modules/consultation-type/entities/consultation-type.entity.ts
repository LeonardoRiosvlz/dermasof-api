import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ServiceEntity } from 'src/modules/service/entities/service.entity';


@Schema({ ...SchemaConstants, collection: 'consultation-type' })
export class ConsultationTypeEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() duration: number;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ServiceEntity}) service: string;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) doctors?: Array<string>;
}

export const ConsultationTypeSchema = SchemaFactory.createForClass(ConsultationTypeEntity);

export const ConsultationTypeFeature = {
  name: ConsultationTypeEntity.name,
  schema: ConsultationTypeSchema,
};

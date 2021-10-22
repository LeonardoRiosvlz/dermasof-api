import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ServiceCategoryEntity } from '../modules/service-category/entities/service-category.entity';

@Schema({ ...SchemaConstants, collection: 'service' })
export class ServiceEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() price: number;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ServiceCategoryEntity}) category?: string;
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceEntity);

export const ServiceFeature = {
  name: ServiceEntity.name,
  schema: ServiceSchema,
};

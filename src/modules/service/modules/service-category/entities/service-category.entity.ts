import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'service-category' })
export class ServiceCategoryEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const ServiceCategorySchema = SchemaFactory.createForClass(ServiceCategoryEntity);

export const ServiceCategoryFeature = {
  name: ServiceCategoryEntity.name,
  schema: ServiceCategorySchema,
};

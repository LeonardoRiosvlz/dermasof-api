import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'product' })
export class ProductEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);

export const ProductFeature = {
  name: ProductEntity.name,
  schema: ProductSchema,
};

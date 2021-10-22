import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'product-category' })
export class ProductCategoryEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategoryEntity);

export const ProductCategoryFeature = {
  name: ProductCategoryEntity.name,
  schema: ProductCategorySchema,
};

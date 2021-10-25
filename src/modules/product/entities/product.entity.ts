import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ProductCategoryEntity } from '../modules/product-category/entities/product-category.entity';


@Schema({ ...SchemaConstants, collection: 'product' })
export class ProductEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() price: number;
  @Prop() minimumStock: number;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ProductCategoryEntity}) category?: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);

export const ProductFeature = {
  name: ProductEntity.name,
  schema: ProductSchema,
};

import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';

@Schema({ ...SchemaConstants, collection: 'floor' })
export class FloorEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() location: number;
  @Prop() description?: string;
  @Prop() isActive: boolean;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => HeadquartersEntity} ) headquarter: string;
  
}

export const FloorSchema = SchemaFactory.createForClass(FloorEntity);

export const FloorFeature = {
  name: FloorEntity.name,
  schema: FloorSchema,
};

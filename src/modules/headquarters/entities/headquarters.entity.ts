import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'headquarters' })
export class HeadquartersEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() code: string;
  @Prop() city: string;
  @Prop() email: string;
  @Prop() phoneNumber: string;
  @Prop() address: string;
  @Prop({ type: MSchema.Types.ObjectId }) manager: string;
  @Prop() isActive?: boolean;

}

export const HeadquartersSchema = SchemaFactory.createForClass(HeadquartersEntity);

export const HeadquartersFeature = {
  name: HeadquartersEntity.name,
  schema: HeadquartersSchema,
};

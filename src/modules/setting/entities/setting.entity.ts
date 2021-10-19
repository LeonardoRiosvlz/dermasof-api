import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

@Schema({ ...SchemaConstants, collection: 'setting' })
export class SettingEntity extends PersistentEntity {
  @Prop() email?: string;
  @Prop() address?: string;
  @Prop() phoneNumber?: string;
  @Prop() isActive?: boolean;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) logo?: string;

}

export const SettingSchema = SchemaFactory.createForClass(SettingEntity);

export const SettingFeature = {
  name: SettingEntity.name,
  schema: SettingSchema,
};

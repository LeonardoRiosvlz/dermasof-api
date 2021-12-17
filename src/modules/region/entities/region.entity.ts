import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


export enum GenderType {
  MALE='MALE',
  FEMALE='FEMALE'
}
 
@Schema({ ...SchemaConstants, collection: 'region' })
export class RegionEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) photoFile?: string;
  @Prop({type:String}) gender: GenderType;
}

export const RegionSchema = SchemaFactory.createForClass(RegionEntity);

export const RegionFeature = {
  name: RegionEntity.name,
  schema: RegionSchema,
};

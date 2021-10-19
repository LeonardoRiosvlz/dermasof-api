import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FloorEntity } from '../../floor/entities/floor.entity';
export enum OfficeType{
  PARKING ='PARKING',
  OFFICE ='OFFICE',
  CASINO ='CASINO',
}

@Schema({ ...SchemaConstants, collection: 'office' })
export class OfficeEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop({type:String}) officeType: OfficeType;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FloorEntity} ) floor: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const OfficeSchema = SchemaFactory.createForClass(OfficeEntity);

export const OfficeFeature = {
  name: OfficeEntity.name,
  schema: OfficeSchema,
};

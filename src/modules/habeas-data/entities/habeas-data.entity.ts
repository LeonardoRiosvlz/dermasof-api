import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'habeas-data' })
export class HabeasDataEntity extends PersistentEntity {
  @Prop() description: string;
  @Prop() isActive?: boolean;
}

export const HabeasDataSchema = SchemaFactory.createForClass(HabeasDataEntity);

export const HabeasDataFeature = {
  name: HabeasDataEntity.name,
  schema: HabeasDataSchema,
};

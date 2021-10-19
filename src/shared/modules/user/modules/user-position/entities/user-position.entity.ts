import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'user-position' })
export class UserPositionEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive: boolean;
}

export const UserPositionSchema = SchemaFactory.createForClass(UserPositionEntity);

export const UserPositionFeature = {
  name: UserPositionEntity.name,
  schema: UserPositionSchema,
};

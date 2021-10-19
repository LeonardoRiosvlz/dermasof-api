import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'user-area' })
export class UserAreaEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive: boolean;
}

export const UserAreaSchema = SchemaFactory.createForClass(UserAreaEntity);

export const UserAreaFeature = {
  name: UserAreaEntity.name,
  schema: UserAreaSchema,
};

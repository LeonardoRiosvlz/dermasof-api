import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PermitsEntity } from './schema/permits.schema';


@Schema({ ...SchemaConstants, collection: 'roles' })
export class RoleEntity extends PersistentEntity {
  @Prop({ required: true, unique: true }) name: string;
  @Prop({ required: false }) description?: string;
  @Prop({ type: Array<PermitsEntity>() }) permits: Array<PermitsEntity>;

}

export const RoleSchema = SchemaFactory.createForClass(RoleEntity);
export const RoleFeature: ModelDefinition = {
  name: RoleEntity.name,
  schema: RoleSchema,
};
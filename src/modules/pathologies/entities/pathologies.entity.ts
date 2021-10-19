import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'pathologies' })
export class PathologiesEntity extends PersistentEntity {
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const PathologiesSchema = SchemaFactory.createForClass(PathologiesEntity);

export const PathologiesFeature = {
  name: PathologiesEntity.name,
  schema: PathologiesSchema,
};

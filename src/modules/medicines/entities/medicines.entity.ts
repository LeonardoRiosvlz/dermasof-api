import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'medicines' })
export class MedicinesEntity extends PersistentEntity {
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const MedicinesSchema = SchemaFactory.createForClass(MedicinesEntity);

export const MedicinesFeature = {
  name: MedicinesEntity.name,
  schema: MedicinesSchema,
};

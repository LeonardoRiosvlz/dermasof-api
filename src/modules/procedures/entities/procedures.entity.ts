import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'procedures' })
export class ProceduresEntity extends PersistentEntity {
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const ProceduresSchema = SchemaFactory.createForClass(ProceduresEntity);

export const ProceduresFeature = {
  name: ProceduresEntity.name,
  schema: ProceduresSchema,
};

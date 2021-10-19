import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: '__name__(kebabCase)' })
export class __name__Entity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const __name__Schema = SchemaFactory.createForClass(__name__Entity);

export const __name__Feature = {
  name: __name__Entity.name,
  schema: __name__Schema,
};

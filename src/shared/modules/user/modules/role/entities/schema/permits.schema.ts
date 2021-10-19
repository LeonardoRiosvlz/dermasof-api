import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';

import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';

export class PermitsEntity {
  @Prop({ _id: false })
  @Prop({ default: APP_MODULES, type: String }) module: APP_MODULES;
  @Prop({ default: ACTION_LIST, type: String }) action: ACTION_LIST;
}

export const PermitsSchema = SchemaFactory.createForClass(PermitsEntity);

export const PermitsFeature: ModelDefinition = {
  name: PermitsEntity.name,
  schema: PermitsSchema,
};

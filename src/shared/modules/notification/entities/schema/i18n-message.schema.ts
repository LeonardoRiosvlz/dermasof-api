import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { I18nMessage } from '../../interfaces/IAppNotificationService';

export class I18nMessageEntity implements I18nMessage {
  @Prop({ _id: false })
  @Prop() es: string;
  @Prop() en: string;
  @Prop() de?: string;
  @Prop() pt?: string;
  @Prop() it?: string;
  @Prop() ru?: string;
  @Prop() fr?: string;
}

export const I18nMessageSchema = SchemaFactory.createForClass(I18nMessageEntity);

export const I18nMessageFeature: ModelDefinition = {
  name: I18nMessageEntity.name,
  schema: I18nMessageSchema,
};

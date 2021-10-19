import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';

export class SettingsEntity {
  @Prop({ _id: false })
  @Prop({ default: 'en', type: String }) lang: string;
}

export const SettingsSchema = SchemaFactory.createForClass(SettingsEntity);

export const SettingsFeature: ModelDefinition = {
  name: SettingsEntity.name,
  schema: SettingsSchema,
};

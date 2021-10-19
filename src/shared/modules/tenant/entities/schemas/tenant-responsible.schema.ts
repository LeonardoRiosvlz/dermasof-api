import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';




export class TenantResponsibleEntity {
  @Prop({ _id: false })
  @Prop() email: string;
  @Prop() firstname: string;
  @Prop() lastname?: string;
  @Prop() phoneNumber?: string;

}

export const TenantResponsibleSchema = SchemaFactory.createForClass(TenantResponsibleEntity);

export const TenantResponsibleFeature: ModelDefinition = {
  name: TenantResponsibleEntity.name,
  schema: TenantResponsibleSchema,
};

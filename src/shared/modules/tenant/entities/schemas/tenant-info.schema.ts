import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { TenantResponsibleEntity, TenantResponsibleSchema } from './tenant-responsible.schema';


export enum TenantCurrency {
  USD = 'USD',
  COP = 'COP',
  EUR = 'EUR',
}


export class TenantInfoEntity {
  @Prop({ _id: false })
  @Prop() email?: string;
  @Prop() country?: string;
  @Prop() nit?: string;
  @Prop() webSite?: string;
  @Prop() description?: string;
  @Prop() address?: string;
  @Prop() phoneNumber?: string;
  @Prop({ type: String }) currency?: TenantCurrency;
  @Prop({ type: TenantResponsibleEntity }) responsible?: TenantResponsibleEntity;
  @Prop({ type: MSchema.Types.ObjectId }) logoFile?: string;
}

export const TenantInfoSchema = SchemaFactory.createForClass(TenantInfoEntity);

export const TenantInfoFeature: ModelDefinition = {
  name: TenantInfoEntity.name,
  schema: TenantInfoSchema,
};

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ITenant } from '../../../core/interfaces/ITenant';
import { TenantInfoEntity } from './schemas/tenant-info.schema';


@Schema({ ...SchemaConstants, collection: 'tenants' })
export class TenantEntity extends PersistentEntity implements ITenant {
  @Prop({ required: true, unique: true }) code: string;
  @Prop({ required: true }) name: string;
  @Prop() isActive: boolean;
  @Prop({ type: TenantInfoEntity }) info?: TenantInfoEntity;

}

export const TenantSchema = SchemaFactory.createForClass(TenantEntity);

export const TenantFeature = {
  name: TenantEntity.name,
  schema: TenantSchema,
};
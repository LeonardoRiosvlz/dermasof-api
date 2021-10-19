import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'informed-consent' })
export class InformedConsentEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const InformedConsentSchema = SchemaFactory.createForClass(InformedConsentEntity);

export const InformedConsentFeature = {
  name: InformedConsentEntity.name,
  schema: InformedConsentSchema,
};

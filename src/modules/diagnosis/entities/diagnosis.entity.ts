import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'diagnosis' })
export class DiagnosisEntity extends PersistentEntity {
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const DiagnosisSchema = SchemaFactory.createForClass(DiagnosisEntity);

export const DiagnosisFeature = {
  name: DiagnosisEntity.name,
  schema: DiagnosisSchema,
};

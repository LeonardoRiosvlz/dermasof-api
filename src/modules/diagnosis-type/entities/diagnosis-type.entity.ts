import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'diagnosis-type' })
export class DiagnosisTypeEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const DiagnosisTypeSchema = SchemaFactory.createForClass(DiagnosisTypeEntity);

export const DiagnosisTypeFeature = {
  name: DiagnosisTypeEntity.name,
  schema: DiagnosisTypeSchema,
};

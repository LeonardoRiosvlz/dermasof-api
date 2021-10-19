import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'laboratory-exams' })
export class LaboratoryExamsEntity extends PersistentEntity {
  @Prop() code: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const LaboratoryExamsSchema = SchemaFactory.createForClass(LaboratoryExamsEntity);

export const LaboratoryExamsFeature = {
  name: LaboratoryExamsEntity.name,
  schema: LaboratoryExamsSchema,
};

import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'medical-specialties' })
export class MedicalSpecialtiesEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop() isActive?: boolean;
}

export const MedicalSpecialtiesSchema = SchemaFactory.createForClass(MedicalSpecialtiesEntity);

export const MedicalSpecialtiesFeature = {
  name: MedicalSpecialtiesEntity.name,
  schema: MedicalSpecialtiesSchema,
};

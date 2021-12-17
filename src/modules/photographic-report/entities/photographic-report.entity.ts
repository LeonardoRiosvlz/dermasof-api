import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'photographic-report' })
export class PhotographicReportEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientsEntity}) patient: string;
  @Prop() name: string;
  @Prop() description?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) after?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) before?: string;
  @Prop() isActive?: boolean;
}

export const PhotographicReportSchema = SchemaFactory.createForClass(PhotographicReportEntity);

export const PhotographicReportFeature = {
  name: PhotographicReportEntity.name,
  schema: PhotographicReportSchema,
};

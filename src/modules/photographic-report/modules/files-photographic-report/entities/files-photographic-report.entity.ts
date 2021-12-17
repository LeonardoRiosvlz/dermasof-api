import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PhotographicReportEntity } from 'src/modules/photographic-report/entities/photographic-report.entity';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'files-photographic-report' })
export class FilesPhotographicReportEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PhotographicReportEntity}) photographicReport?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesPhotographicReportSchema = SchemaFactory.createForClass(FilesPhotographicReportEntity);

export const FilesPhotographicReportFeature = {
  name: FilesPhotographicReportEntity.name,
  schema: FilesPhotographicReportSchema,
};

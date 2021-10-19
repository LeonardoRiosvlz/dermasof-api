import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

export enum FileStorageType {
  AWS = 'AWS',
  LOCAL = 'LOCAL',
  CLOUDINARY = 'CLOUDINARY',
  OTHER = 'OTHER'
}

export enum FileStatus {
  UNUSED = 'UNUSED',
  PROCESSING = 'PROCESSING',
  OK = 'OK'
}


@Schema({ ...SchemaConstants, collection: 'files' })
export class FilesEntity extends PersistentEntity {
  @Prop()  url: string;
  @Prop() key: string;
  @Prop() filename: string;
  @Prop() bytes?: number;
  @Prop({type: String}) storage: FileStorageType;
  @Prop({type: String}) status: FileStatus;

}

export const FilesSchema = SchemaFactory.createForClass(FilesEntity);

export const FilesFeature = {
  name: FilesEntity.name,
  schema: FilesSchema,
};

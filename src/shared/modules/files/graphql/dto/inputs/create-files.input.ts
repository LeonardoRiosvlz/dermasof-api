import { Field, InputType, ID } from '@nestjs/graphql';
import { FileStatus, FileStorageType } from '../../../entities/files.entity';

@InputType()
export class CreateFilesInput {
  @Field()  url: string;
  @Field() key: string;
  @Field() filename: string;
  @Field({nullable: true}) bytes?: number;
  @Field(() => FileStorageType) storage: FileStorageType;
  @Field(() => FileStatus) status: FileStatus;
}

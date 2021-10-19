import { InputType, Field } from '@nestjs/graphql';
import { FileStorageType } from '../../../entities/files.entity';



@InputType()
export class CreateUploadedFileInput {

  @Field(() => String)
  key: string;

  @Field(() => FileStorageType, { nullable: true, defaultValue: FileStorageType.AWS })
  storage?: FileStorageType;

  @Field(() => String, { nullable: true })
  toRemove?: string;

  @Field(() => Boolean, { nullable: true })
  isVideo?: boolean;
}
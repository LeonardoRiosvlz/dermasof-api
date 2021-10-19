import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class GetUploadSignedUrlInput {
  @Field(() => String)
  filename: string;

  @Field(() => String)
  contentType: string;
}
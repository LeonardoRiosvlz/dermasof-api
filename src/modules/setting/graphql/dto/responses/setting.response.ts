import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

@ObjectType()
export class SettingResponse{
  @Field(() => ID) id: string;
  @Field({nullable: true}) email?: string;
  @Field({nullable: true}) address?: string;
  @Field({nullable: true}) phoneNumber?: string;
  @Field() isActive?: boolean;
  @Field(() => CloudFileResponse, { nullable: true }) logo?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { GenderType } from 'src/modules/region/entities/region.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

registerEnumType(GenderType, { name: 'GenderType' });

@ObjectType()
export class RegionResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field(() => CloudFileResponse, { nullable: true }) photoFile?: CloudFileResponse;
  @Field(() => GenderType, )  gender: GenderType;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class PhotographicReportResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field({nullable: true}) description?: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient: SolvedEntityResponse;
  @Field(() => CloudFileResponse, { nullable: true }) after?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) before?: CloudFileResponse;
  @Field() isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
